import { FrontOfficeRoutes } from '../../src/utils/constants';
import { API_URL, ApiEndpoint } from '../../src/services/constants';

export enum Alias {
  BOOKS = '@books',
}

export const interceptBooks = () =>
  cy.intercept(`${API_URL}/${ApiEndpoint.BOOKS}**`).as(Alias.BOOKS.slice(1));

export const books = () => {
  cy.visit(FrontOfficeRoutes.BOOKS);
};
