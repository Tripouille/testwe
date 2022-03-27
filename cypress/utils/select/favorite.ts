export const addFavoriteCharacter = (card: Cypress.Chainable) =>
  card.find('[data-cy=add-favorite-character]');
export const removeFavoriteCharacter = (card: Cypress.Chainable) =>
  card.find('[data-cy=remove-favorite-character]');
