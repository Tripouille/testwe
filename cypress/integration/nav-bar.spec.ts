import * as Visit from '../utils/visit';
import * as Assert from '../utils/assert';
import * as Select from '../utils/select';

describe('Nav bar', () => {
  before(() => {
    Visit.home();
  });

  it('home should redirect to books', () => {
    Assert.currentUrlIsBooks();
  });

  it('books nav item should redirect to books page', () => {
    Select.Navigation.navBooks().click();
    Assert.currentUrlIsBooks();
  });

  it('characters nav item should redirect to characters page', () => {
    Select.Navigation.navCharacters().click();
    Assert.currentUrlIsCharacters();
  });

  it('favorite characters nav item should redirect to favorite characters page', () => {
    Select.Navigation.navFavoriteCharacters().click();
    Assert.currentUrlIsFavoriteCharacters();
  });
});
