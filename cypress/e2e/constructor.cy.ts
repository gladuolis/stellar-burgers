describe('Страница конструктора', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/api/ingredients', { fixture: 'ingredients.json' }).as('getIngredients');
    cy.intercept('GET', '**/api/auth/user', { fixture: 'user.json' }).as('getUser');
    cy.intercept('POST', '**/api/auth/login', { fixture: 'login-response.json' }).as('login');
    cy.intercept('POST', '**/api/orders', { fixture: 'order.json' }).as('createOrder');

    cy.visit('http://localhost:4000');
    cy.wait('@getIngredients', { timeout: 10000 });
  });

  it('должна загружать ингредиенты и отображать их', () => {
    cy.contains('Краторная булка N-200i').scrollIntoView().should('be.visible');
    cy.contains('Мясо бессмертных моллюсков Protostomia').scrollIntoView().should('be.visible');
    cy.contains('Соус Spicy-X').scrollIntoView().should('be.visible');
  });

  it('должна добавлять булку в конструктор', () => {
    cy.contains('Краторная булка N-200i')
      .scrollIntoView()
      .parents('li')
      .find('button')
      .contains('Добавить')
      .click({ force: true });

    cy.contains('Краторная булка N-200i (верх)').should('be.visible');
    cy.contains('Краторная булка N-200i (низ)').should('be.visible');
  });

  it('должна добавлять начинку в конструктор', () => {
    cy.contains('Мясо бессмертных моллюсков Protostomia')
      .scrollIntoView()
      .parents('li')
      .find('button')
      .contains('Добавить')
      .click({ force: true });

    cy.contains('Мясо бессмертных моллюсков Protostomia').should('be.visible');
  });

  it('должна открывать страницу ингредиента по клику', () => {
    cy.contains('Краторная булка N-200i')
      .scrollIntoView()
      .click({ force: true });

    cy.url().should('include', '/ingredients/643d69a5c3f7b9001cfa093c');
    cy.contains('Детали ингредиента').should('be.visible');
    cy.contains('Краторная булка N-200i').should('be.visible');
  });

  it('должна возвращаться на главную по нажатию "Назад"', () => {
    cy.contains('Краторная булка N-200i')
      .scrollIntoView()
      .click({ force: true });

    cy.url().should('include', '/ingredients/643d69a5c3f7b9001cfa093c');
    cy.go('back');
    cy.url().should('eq', 'http://localhost:4000/');
    cy.contains('Соберите бургер').should('be.visible');
  });

  it('должна создавать заказ для авторизованного пользователя', () => {
    cy.window().then((win) => {
      win.localStorage.setItem('refreshToken', 'test-refresh-token');
      win.document.cookie = 'accessToken=Bearer test-access-token';
    });

    cy.reload();
    cy.wait('@getIngredients', { timeout: 10000 });

    cy.contains('Краторная булка N-200i')
      .scrollIntoView()
      .parents('li')
      .find('button')
      .contains('Добавить')
      .click({ force: true });

    cy.contains('Мясо бессмертных моллюсков Protostomia')
      .scrollIntoView()
      .parents('li')
      .find('button')
      .contains('Добавить')
      .click({ force: true });

    cy.contains('Оформить заказ').click();
    cy.wait('@createOrder', { timeout: 10000 });
    cy.contains('12345').should('be.visible');
  });
});