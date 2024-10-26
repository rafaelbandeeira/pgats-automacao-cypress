import account from "../../fixtures/account.json";

class Payment {
    fillCardDetails() {
        cy.get('[data-qa="name-on-card"]').type(account.card.name)
        cy.get('[data-qa="card-number"]').type(account.card.number)
        cy.get('[data-qa=cvc]').type(account.card.cvc)
        cy.get('[data-qa="expiry-month"]').type(account.card.expiry.month)
        cy.get('[data-qa="expiry-year"]').type(account.card.expiry.year)

        return this
    }

    confirmPayment() {
        cy.get('[data-qa="pay-button"]').click()
    }
}

export default new Payment()