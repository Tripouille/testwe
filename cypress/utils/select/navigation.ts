const navItem = (label: string) => cy.dataCy('nav-item').contains(label);

export const navBooks = () => navItem('Books');
export const navCharacters = () => navItem('Characters');
export const navFavoriteCharacters = () => navItem('Favorite characters');
