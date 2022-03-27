import * as Visit from '../utils/visit';
import * as Select from '../utils/select';
import { FAVORITE_CHARACTERS_LOCAL_STORAGE_KEY } from '../../src/store/slices/favoriteCharacters';

describe('Favorite characters', () => {
  beforeEach(() => {
    cy.clearLocalStorage(FAVORITE_CHARACTERS_LOCAL_STORAGE_KEY);
  });

  it('should not display any character when local storage is empty', () => {
    Visit.favoriteCharacters();
    Select.characterCards().should('have.length', 0);
  });

  it('should add favorite and be available in favorite characters page', () => {
    Visit.characters();
    Select.Favorite.addFavoriteCharacter(Select.characterCards().first()).click();
    Visit.favoriteCharacters();
    Select.characterCards().should('have.length', 1);
    // Check if the favorite is correctly saved in local storage
    cy.reload();
    Select.characterCards().should('have.length', 1);
  });

  it('should remove favorite from favorite characters page', () => {
    Visit.characters();
    Select.Favorite.addFavoriteCharacter(Select.characterCards().first()).click();
    Visit.favoriteCharacters();
    Select.characterCards().should('have.length', 1);
    Select.Favorite.removeFavoriteCharacter(Select.characterCards().first()).click();
    Select.characterCards().should('have.length', 0);
    // Check if the favorite is correctly removed from local storage
    cy.reload();
    Select.characterCards().should('have.length', 0);
  });
});
