import account from "../../fixtures/account.json";
import home from "../home";

class ContactUs {
    fillForm(subject, message) {
        cy.get('[data-qa=name]').type(account.name)
        cy.get('[data-qa=email]').type(account.email)
        cy.get('[data-qa=subject]').type(subject)
        cy.get('[data-qa=message]').type(message)

        cy.get('input[type=file]').selectFile('cypress/fixtures/example.json')

        return this
    }
    submitForm() {
        cy.get('[data-qa="submit-button"]').click()

        return this
    }

    goHome() {
        cy.get('.btn.btn-success').click()

        return home
    }
}

export default new ContactUs()