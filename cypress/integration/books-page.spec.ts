import * as Visit from '../utils/visit';
import * as ApiCall from '../utils/api-call';
import * as Select from '../utils/select';
import * as Assert from '../utils/assert';

describe('Books page', () => {
  before(() => {
    Visit.interceptBooks();
    Visit.books();
  });

  it('should call api with page=1 and pageSize=6', () => {
    ApiCall.includesParam(Visit.Alias.BOOKS, 'page=1&pageSize=6');
  });

  it('should display 6 book cards', () => {
    Select.bookCards().should('have.length', 6);
  });

  it('active page should be page one', () => {
    Assert.isAriaCurrent(Select.Pagination.page(1));
  });

  it('next and prev page button should work correctly', () => {
    Visit.interceptBooks();
    Select.Pagination.next().click();
    ApiCall.includesParam(Visit.Alias.BOOKS, 'page=2&pageSize=6');
    Assert.isAriaCurrent(Select.Pagination.page(2));
    Select.Pagination.prev().click();
    Assert.isAriaCurrent(Select.Pagination.page(1));
  });

  it('pagination page button should work correctly', () => {
    Visit.interceptBooks();
    Visit.books();
    ApiCall.includesParam(Visit.Alias.BOOKS, 'page=1&pageSize=6');
    Assert.isAriaCurrent(Select.Pagination.page(1));
    Select.Pagination.page(2).click();
    ApiCall.includesParam(Visit.Alias.BOOKS, 'page=2&pageSize=6');
    Assert.isAriaCurrent(Select.Pagination.page(2));
    Select.Pagination.page(1).click();
    Assert.isAriaCurrent(Select.Pagination.page(1));
  });
});
