/// <reference types="cypress" />

describe('index.html', () => {
  beforeEach(() => {
    const url = process.env.URL || './public/index.html';
    cy.visit(url);
  })

  describe('visit', () => {
    it('ok', () => {
      // verify
      cy.get('[data-testid="content"]')
        .should('not.contain', '1');
    });
  });

  describe('increment', () => {
    it('ok: one click', () => {
      // exercise
      cy.get('[data-testid="increment"]')
        .click();

      // verify
      cy.get('[data-testid="content"]')
        .should('contain', '1');
    });

    it('ok: two click', () => {
      // exercise
      cy.get('[data-testid="increment"]')
        .click()
        .click();

      // verify
      cy.get('[data-testid="content"]')
        .should('contain', '2');
    });
  });
})
