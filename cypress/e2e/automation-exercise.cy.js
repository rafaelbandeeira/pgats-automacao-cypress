/// <reference types="cypress" />

import * as messages from "../fixtures/constants/messages";
import * as endpoints from "../fixtures/constants/endpoints";
import account from "../fixtures/account.json";
import menu from "../pages/menu";
import contactUs from "../pages/contactUs";
import home from "../pages/home";

let timestamp
let randomEmail

describe('Automation Exercise', () => {
    beforeEach(() => {
        timestamp = new Date().getTime()
        randomEmail = `email-${timestamp}@testa.com`
        cy.visit('/')
    });

    it('Teste Case 1: Register User', () => {
        menu
            .login()
            .signUp(`${account.name} ${account.surname}`, randomEmail)
            .fillForm()
            .createAccount()
            .checkCurrentUser()
    });

    it('Test Case 2: Login User with correct email and password', () => {
        menu
            .login()
            .signUp(`${account.name} ${account.surname}`, randomEmail)
            .fillForm()
            .createAccount()
            .logout()
        
        menu
            .login()
            .signIn(randomEmail, account.password)

        menu
            .checkCurrentUser()
            .deleteAccount()
    });

    it('Test Case 3: Login User with incorrect email and password', () => {
        cy.get('a[href="/login"]').click()
        menu
            .login()
            .signIn('incorrect@emei.com', '1bksa0f; mfjas')

        cy.contains(messages.BAD_CREDENTIALS)
    });

    it('Test Case 4: Logout User', () => {
        menu
            .login()
            .signIn(account.email, account.password)
            .checkCurrentUser()
            .logout()

        cy.url().should('include', endpoints.LOGIN)
    });

    it('Test Case 5: Register User with existing email', () => {
        menu
            .login()
            .signUp('Regigigas', account.email) 

        cy.contains(messages.EMAIL_EXISTS)
        
    });

    it('Test Case 6: Contact Us Form', () => {
        menu
            .contactUs()
            .fillForm(
                `You shall not pass ${timestamp}`,
                'Pegadinha do mallandro, cara! gugu yeye'
            ).submitForm()

        cy.get('.status.alert.alert-success').should('have.text', messages.DETAILS_SUBMITTED)

        contactUs.goHome()

        cy.url().should('eq', 'https://automationexercise.com/')
    });

    it('Test Case 8: Verify All Products and product detail page', () => {
        menu
            .products()
            .selectFirstProduct()
            .checkProductDetails
    });

    it('Test Case 9: Search Product', () => {
        menu
            .products()
            .searchProduct('shirt')
            .checkSearchResults()
    });

    it('Test Case 10: Verify Subscription in home page', () => {
        menu.subscribe(randomEmail)
    });

    it ('Test Case 15: Place Order: Register before Checkout', () => {
        menu
            .login()
            .signUp(`${account.name} ${account.surname}`, randomEmail)
            .fillForm()
            .createAccount()
            .checkCurrentUser()
        
        home
            .selectFirstProduct()
            .openCart()
            .checkout()
            .verifyAddress()
            .reviewOrder()
            .insertComment('mille fire 1.0 semi-novo')
            .placeOrder()
            .fillCardDetails()
            .confirmPayment()
        cy.contains(messages.ORDER_CONFIRMED)

        menu.deleteAccount()
    });
}); 