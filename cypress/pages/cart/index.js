import checkout from "../checkout"

class Cart {
    checkout() {
        cy.get('.btn.btn-default.check_out').click()

        return checkout
    }
}

export default new Cart()