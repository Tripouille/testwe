// eslint-disable-next-line import/prefer-default-export
export const isAriaCurrent = (chainable: Cypress.Chainable) => {
  chainable.should('have.attr', 'aria-current', 'true');
};
