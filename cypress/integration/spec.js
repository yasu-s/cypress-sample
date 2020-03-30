/// <reference types="cypress" />

describe('index.html', () => {
  beforeEach(() => {
    cy.visit('./public/index.html');
  })

  describe('increment', () => {
    it('ok: one click', () => {
      // exercise
      cy.get('[data-testid="increment"]')
        .click();

      // verify
      cy.get('[data-testid="content"]')
        .should('exist')
        .contains('1');
    });

    it('ok: two click', () => {
      // exercise
      cy.get('[data-testid="increment"]')
        .click()
        .click();

      // verify
      cy.get('[data-testid="content"]')
        .should('exist')
        .contains('2');
    });
  });
})
