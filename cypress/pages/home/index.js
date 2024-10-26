import cart from "../cart"

class Home {
    selectFirstProduct() {
        cy.get('.features_items').scrollIntoView()
        cy.get('a[data-product-id="1"]').first().click()

        return this
    }

    openCart() {
        cy.contains('View Cart').click()
        cy.contains('Shopping Cart')

        return cart
    }
}

export default new Home()