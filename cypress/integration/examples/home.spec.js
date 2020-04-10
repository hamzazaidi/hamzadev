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
      cy.get('.polygon-wrap-1').should('be.visible');
    })
  })
})


describe('Given a user on the Mobile Device Vertical', () => {
  describe('When it lands on home page', () => {
    beforeEach(() => {
      cy.viewport('iphone-6', 'portrait')
      cy.visit('/home');
    })
    it('Then they will see Nav bar without arrow, Avatar and Typing text', () => {
      cy.get('.navbar-nav').should('be.visible');
      cy.get('img').should('be.visible');
      cy.get('.firstName').should('have.text', 'Hamza');
      cy.get('.lastName').should('have.text', 'Zaidi');
      cy.get('.typing-text').should('be.visible');
    })
  })
})


describe('Given a user on the Mobile Device Horizontal', () => {
  describe('When it lands on home page', () => {
    beforeEach(() => {
      cy.viewport('iphone-6', 'landscape')
      cy.visit('/home');
    })
    it('Then they will see Nav bar without arrow, Avatar and Typing text', () => {
      cy.get('.navbar-nav').should('be.visible');
      cy.get('img').should('be.visible');
      cy.get('.firstName').should('have.text', 'Hamza');
      cy.get('.lastName').should('have.text', 'Zaidi');
      cy.get('.typing-text').should('be.visible');
      cy.get('.polygon-wrap-1').should('be.visible');
    })
  })
})
