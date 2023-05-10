/// <reference types="cypress" />

import { faker } from '@faker-js/faker';


describe('Funcionalidade Pré Cadastro', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    it('Deve completar o pré cadastro com sucesso', () => {
        let fakerFirstName = faker.name.firstName()
        let fakerLastName = faker.name.lastName()
        let emailFaker = faker.internet.email(fakerFirstName)
        let fakerPassword = faker.internet.password()

        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type(fakerPassword)
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(fakerFirstName)
        cy.get('#account_last_name').type(fakerLastName)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    }); 
    
    
    it.only('Deve completar o pré cadastro com sucesso usando comandos customizados', () => {
        let fakerFirstName2 = faker.name.firstName()
        let fakerLastName2 = faker.name.lastName()
        let fakerPassword2 = faker.internet.password()
        let emailFaker2 = faker.internet.email(fakerFirstName2)
        cy.preCadastro(emailFaker2, fakerPassword2, fakerFirstName2, fakerFirstName2)
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });

});