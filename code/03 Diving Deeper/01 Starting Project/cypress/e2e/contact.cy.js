/// <reference types="Cypress" />

describe('contact form', () => {
    it('should submit the form', () => {
        cy.visit('http://localhost:5173/about');
        cy.get('[data-cy="contact-input-message"]').type('Hello world!');
        cy.get('[data-cy="contact-input-name"]').type('John Doe');
        cy.get('[data-cy="contact-input-email"]').type('test@example.com');

        cy.get('[data-cy="contact-btn-submit"').as('submitBtn');
        cy.get('@submitBtn')
            .contains('Send Message')
            .should('not.have.attr', 'disabled');
        cy.get('@submitBtn').click();
        cy.get('@submitBtn')
            .contains('Sending...')
            .should('have.attr', 'disabled');
    });
});
