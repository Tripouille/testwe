import { FrontOfficeRoutes } from '../../src/utils/constants';

export const isAriaCurrent = (chainable: Cypress.Chainable) => {
  chainable.should('have.attr', 'aria-current', 'true');
};

/** Location */
const currentUrlIs = (pathname: string) => cy.location('pathname').should('eq', pathname);
export const currentUrlIsHome = () => currentUrlIs('/');
export const currentUrlIsBooks = () => currentUrlIs(FrontOfficeRoutes.BOOKS);
export const currentUrlIsCharacters = () => currentUrlIs(FrontOfficeRoutes.CHARACTERS);
export const currentUrlIsFavoriteCharacters = () =>
  currentUrlIs(FrontOfficeRoutes.FAVORITE_CHARACTERS);
