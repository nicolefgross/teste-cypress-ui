/// <reference types="cypress" />


describe('Funcionalidade página de produtos', () => {
    
    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            .eq(3)
            .click()
    });

    it('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 4

        cy.get(':nth-child(2) > .page-numbers').click()
        cy.get('[class="product-block grid"]')
            .contains('Beaumont Summit Kit')
            .click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Yellow').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Beaumont Summit Kit” foram adicionados no seu carrinho.')

    });

    it('Deve adicionar produtos ao carrinho - usando comando customizado', () => {
        var quantidade = 4
        cy.addProdutos('Balboa Persistence Tee', 'M', 'Gray', quantidade)
    });

});