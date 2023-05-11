/// <reference types = "cypress" />

import EnderecoPage from '../support/page-objects/endereco.page'
import dadosEndereco from '../fixtures/enderecoFaturamento.json'
import dadosEnderecoEntrega from '../fixtures/enderecoEntrega.json'

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil')
        cy.login('aluno_ebac@teste.com', 'teste@teste.com')
    });


    it('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Tiago', 'Gal', 'Google', 'Brasil', 'Av. José Bonifácio', '2052', 'Porto Alegre', 'Rio Grande do Sul', '32655-600', '55998784520', 'thiti@brasil.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });

    it('Deve fazer cadastro de faturamento com sucesso - usando arquivo de dados', () => {
        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email
            )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });

    it.only('Deve fazer cadastro de endereço de entrega com sucesso', () => {
        EnderecoPage.editarEnderecoEntrega(
            dadosEnderecoEntrega[0].nome,
            dadosEnderecoEntrega[0].sobrenome,
            dadosEnderecoEntrega[0].empresa,
            dadosEnderecoEntrega[0].pais,
            dadosEnderecoEntrega[0].endereco,
            dadosEnderecoEntrega[0].numero,
            dadosEnderecoEntrega[0].cidade,
            dadosEnderecoEntrega[0].estado,
            dadosEnderecoEntrega[0].cep
        )     
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')   
    });


});