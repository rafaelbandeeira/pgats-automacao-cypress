import contact_us from "../contactUs"
import login from "../login"
import products from "../products"
import * as messages from "../../fixtures/constants/messages";
import * as endpoints from "../../fixtures/constants/endpoints";
import contactUs from "../contactUs";

class Menu {
    
    checkCurrentUser() {
        cy.get('.fa.fa-user').parent()

        return this
    }

    login() {
        cy.get('a[href$=login]').click()

        return login
    }

    deleteAccount() {
        cy.get('a[href="/delete_account"]').click()
        cy.url().should('include', endpoints.DELETE_ACCOUNT)
        cy.get('[data-qa="account-deleted"]').should('have.text', messages.ACCOUNT_DELETED)
    }

    logout() {
        cy.get('a[href="/logout"]').click()
    }

    contactUs() {
        cy.get('a[href="/contact_us"]').click()

        return contactUs
    }

    products() {
        cy.get('a[href="/products"]').click()
        cy.contains('All Products')

        return products
    }

    subscribe(email) {
        cy.get('#footer').scrollIntoView()

        cy.get('input#susbscribe_email').type(email)
        cy.get('button#subscribe').click()

        cy.contains(messages.SUBSCRIPTION_CONFIRMED).should('be.visible')
    }
}

export default new Menu()