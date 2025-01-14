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

    it('should validate the form input', () => {
        cy.visit('http://localhost:5173/about');
        cy.get('[data-cy="contact-btn-submit"').click();
        cy.get('[data-cy="contact-btn-submit"').then(el => {
            expect(el).to.not.have.attr('disabled');
            expect(el.text()).to.not.equal('Sending...');
        });
        cy.get('[data-cy="contact-input-message"]').focus().blur();
        cy.get('[data-cy="contact-input-message"]').parent()
            .should('have.attr', 'class')
            .and('match', /invalid/)

        cy.get('[data-cy="contact-input-name"]').focus().blur();
        cy.get('[data-cy="contact-input-name"]').parent()
            .should('have.attr', 'class')
            .and('match', /invalid/)

        cy.get('[data-cy="contact-input-email"]').focus().blur();
        cy.get('[data-cy="contact-input-email"]').parent()
            .should('have.attr', 'class')
            .and('match', /invalid/)
        
    });
});
