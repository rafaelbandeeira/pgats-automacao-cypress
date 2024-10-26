import payment from "../payment"

class Checkout {
    verifyAddress() {
        cy.get('#address_delivery li').should('be.visible')

        return this
    }

    reviewOrder() {
        cy.get('#product-1 td').should('be.visible')

        return this
    }

    insertComment(comment) {
        cy.get('#ordermsg').scrollIntoView()
        cy.get('.form-control').type(comment)

        return this
    }

    placeOrder() {
        cy.get('a[href="/payment"]').click()

        return payment
    }
}

export default new Checkout()