describe('Проверка Cypress', () => {
  it('должен открыть главную страницу', () => {
    cy.visit('http://localhost:4000');
    cy.contains('Соберите бургер').should('be.visible');
  });
});