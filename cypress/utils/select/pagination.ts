const pagination = () => cy.dataCy('pagination');

export const page = (pageNumber: number) => pagination().find('button').contains(pageNumber);
export const prev = () => pagination().find('button[aria-label="Go to previous page"]');
export const next = () => pagination().find('button[aria-label="Go to next page"]');
