class Products {
    selectFirstProduct() {
        cy.get('.single-products')
        .should('be.visible')
        .and('have.length.at.least', 1)
        .first()
        .parent()
        .contains('View Product')
        .click()

        return this
    }

    checkProductDetails() {
        cy.get('.product-information > h2').should('be.visible')
        cy.get('.product-information p')
            .should('be.visible')
            .and('have.length', 4)
        cy.get('.product-information span span').should('be.visible')
    }

    searchProduct(item) {
        cy.get('input#search_product').type(item)
        cy.get('button#submit_search').click()

        return this
    }

    checkSearchResults() {
        cy.get('.title')
            .should('be.visible')
            .and('contain', 'Searched Products')
            
        cy.get('.single-products')
            .should('be.visible')
            .and('have.length.at.least', 1)
    }
}

export default new Products()