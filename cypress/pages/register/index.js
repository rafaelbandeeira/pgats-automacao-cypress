import menu from "../menu";
import * as messages from "../../fixtures/constants/messages";
import * as endpoints from "../../fixtures/constants/endpoints";
import account from "../../fixtures/account.json";

class Register { 
    fillForm() {
        cy.get('[id^="id_gender"]').check('Mr')
        cy.get('input[type=password]').type(account.password, { log: false })

        cy.get('[data-qa=days').select('20')
        cy.get('[data-qa=months').select('October')
        cy.get('[data-qa=years').select('2004')

        cy.get('input[type=checkbox]#newsletter').check()

        cy.get('[data-qa="first_name"]').type(account.name)
        cy.get('[data-qa="last_name"]').type(account.surname)
        cy.get('[data-qa="address"]').type(account.location.address)
        cy.get('[data-qa="country"]').select(account.location.country)
        cy.get('[data-qa="state"]').type(account.location.state)
        cy.get('[data-qa="city"]').type(account.location.city)
        cy.get('[data-qa="zipcode"]').type(account.location.zipcode)
        cy.get('[data-qa="mobile_number"]').type(account.phone)

        return this
    }

    createAccount() {
        cy.get('[data-qa="create-account"]').click()

        cy.url().should('include', endpoints.CREATE_ACCOUNT)
        cy.get('[data-qa="account-created"]').should('have.text', messages.ACCOUNT_CREATED)

        cy.get('[data-qa="continue-button"]').click()

        return menu
    }
}

export default new Register()