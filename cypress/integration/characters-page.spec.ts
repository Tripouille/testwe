import * as Visit from '../utils/visit';
import * as ApiCall from '../utils/api-call';
import * as Select from '../utils/select';

describe('Characters page', () => {
  before(() => {
    Visit.interceptCharacters();
    Visit.characters();
  });

  it('should call api with page=1 and pageSize=6', () => {
    ApiCall.includesParam(Visit.Alias.CHARACTERS, 'page=1&pageSize=6');
  });

  it('should display 6 character cards', () => {
    Select.characterCards().should('have.length', 6);
  });

  it('active page should be page one', () => {
    Select.Pagination.page(1).isAriaCurrent();
  });

  it('next and prev page button should work correctly', () => {
    Visit.interceptCharacters();
    Select.Pagination.next().click();
    ApiCall.includesParam(Visit.Alias.CHARACTERS, 'page=2&pageSize=6');
    Select.Pagination.page(2).isAriaCurrent();
    Select.Pagination.prev().click();
    Select.Pagination.page(1).isAriaCurrent();
  });

  it('pagination page button should work correctly', () => {
    Visit.interceptCharacters();
    Visit.characters();
    ApiCall.includesParam(Visit.Alias.CHARACTERS, 'page=1&pageSize=6');
    Select.Pagination.page(1).isAriaCurrent();
    Select.Pagination.page(2).click();
    ApiCall.includesParam(Visit.Alias.CHARACTERS, 'page=2&pageSize=6');
    Select.Pagination.page(2).isAriaCurrent();
    Select.Pagination.page(1).click();
    Select.Pagination.page(1).isAriaCurrent();
  });
});
