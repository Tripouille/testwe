Cypress.Commands.add('dataCy', value => cy.get(`[data-cy=${value}]`));

Cypress.Commands.add('isAriaCurrent', { prevSubject: true }, (subject: Cypress.Chainable) => {
  cy.wrap(subject).should('have.attr', 'aria-current', 'true');
});
