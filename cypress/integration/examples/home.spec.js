/// <reference types="cypress" />

describe('Given a user on the Desktop', () => {
  describe('When it lands on home page', () => {
    beforeEach(() => {
      cy.visit('/home');
    })
    it('Then they will see Nav bar, Avatar and Typing text', () => {
      cy.get('.navbar-nav').should('be.visible');
      cy.get('img').should('be.visible');
      cy.get('.firstName').should('have.text', 'Hamza');
      cy.get('.lastName').should('have.text', 'Zaidi');
      cy.get('.typing-text').should('be.visible');
    })
  })
})


describe('Given a user on the Mobile Device Vertical', () => {
  describe('When it lands on home page', () => {
    beforeEach(() => {
      cy.viewport('iphone-6')
      cy.visit('/home');
    })
    it('Then they will see Nav bar without arrow, Avatar and Typing text', () => {
      cy.get('.navbar-nav .logo').should('not.be.visible');
      cy.get('.navbar-nav').should('be.visible');
      cy.get('img').should('be.visible');
      cy.get('.firstName').should('have.text', 'Hamza');
      cy.get('.lastName').should('have.text', 'Zaidi');
      cy.get('.typing-text').should('be.visible');
    })
  })
})
