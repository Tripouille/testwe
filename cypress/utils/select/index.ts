export * as Pagination from './pagination';
export * as Navigation from './navigation';

export const bookCards = () => cy.dataCy('book-card');
export const characterCards = () => cy.dataCy('character-card');
export const navItems = () => cy.dataCy('nav-item');
