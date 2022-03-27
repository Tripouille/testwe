import { FrontOfficeRoutes } from '../../src/utils/constants';
import { API_URL, ApiEndpoint } from '../../src/services/constants';

export enum Alias {
  BOOKS = '@books',
  CHARACTERS = '@characters',
  CHARACTER = '@character',
}

export const home = () => {
  cy.visit('/');
};

/** Books */
export const interceptBooks = () =>
  cy.intercept(`${API_URL}/${ApiEndpoint.BOOKS}?**`).as(Alias.BOOKS.slice(1));

export const books = () => {
  cy.visit(FrontOfficeRoutes.BOOKS);
};

/** Characters */
export const interceptCharacters = () =>
  cy.intercept(`${API_URL}/${ApiEndpoint.CHARACTERS}?**`).as(Alias.CHARACTERS.slice(1));
export const characters = () => {
  cy.visit(FrontOfficeRoutes.CHARACTERS);
};

/** Character */
export const interceptCharacter = () =>
  cy.intercept(`${API_URL}/${ApiEndpoint.CHARACTERS}/**`).as(Alias.CHARACTER.slice(1));

/** Favorites characters */
export const favoriteCharacters = () => {
  cy.visit(FrontOfficeRoutes.FAVORITE_CHARACTERS);
};
