// eslint-disable-next-line import/prefer-default-export
export const includesParam = (alias: string, param: string) =>
  cy.wait(alias).its('request.url').should('include', param);
