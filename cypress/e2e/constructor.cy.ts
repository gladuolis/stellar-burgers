describe('Страница конструктора', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/api/ingredients', { fixture: 'ingredients.json' }).as('getIngredients');
    cy.intercept('GET', '**/api/auth/user', { fixture: 'user.json' }).as('getUser');
    cy.intercept('POST', '**/api/auth/login', { fixture: 'login-response.json' }).as('login');
    cy.intercept('POST', '**/api/orders', { fixture: 'order.json' }).as('createOrder');

    cy.visit('/');
    cy.wait('@getIngredients', { timeout: 10000 });
  });

  afterEach(() => {
    cy.window().then((win) => {
      win.localStorage.removeItem('refreshToken');
      win.document.cookie = 'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
    });
  });

  it('должна загружать ингредиенты и отображать их', () => {
    cy.get('[data-cy="ingredients-section"]').within(() => {
      cy.contains('Краторная булка N-200i').scrollIntoView().should('be.visible');
      cy.contains('Мясо бессмертных моллюсков Protostomia').scrollIntoView().should('be.visible');
      cy.contains('Соус Spicy-X').scrollIntoView().should('be.visible');
    });
  });

  it('должна добавлять булку в конструктор', () => {
    cy.get('[data-cy="ingredients-section"]').within(() => {
      cy.contains('Краторная булка N-200i')
        .parents('[data-cy="ingredient-item"]')
        .find('button')
        .contains('Добавить')
        .click({ force: true });
    });

    cy.get('[data-cy="constructor-section"]').within(() => {
      cy.contains('Краторная булка N-200i (верх)').should('be.visible');
      cy.contains('Краторная булка N-200i (низ)').should('be.visible');
    });
  });

  it('должна добавлять начинку в конструктор', () => {
    cy.get('[data-cy="ingredients-section"]').within(() => {
      cy.contains('Мясо бессмертных моллюсков Protostomia')
        .parents('[data-cy="ingredient-item"]')
        .find('button')
        .contains('Добавить')
        .click({ force: true });
    });

    cy.get('[data-cy="constructor-section"]').within(() => {
      cy.contains('Мясо бессмертных моллюсков Protostomia').should('be.visible');
    });
  });

  it('должна открывать страницу ингредиента по клику и отображать правильный ингредиент', () => {
    const ingredientName = 'Краторная булка N-200i';
    
    cy.get('[data-cy="ingredients-section"]').within(() => {
      cy.contains(ingredientName).scrollIntoView().click({ force: true });
    });

    cy.url().should('include', '/ingredients/643d69a5c3f7b9001cfa093c');
    
    cy.get('[data-cy="modal"]').within(() => {
      cy.contains('Детали ингредиента').should('be.visible');
      cy.contains(ingredientName).should('be.visible');
    });
  });

  it('должна возвращаться на главную по нажатию "Назад"', () => {
    cy.get('[data-cy="ingredients-section"]').within(() => {
      cy.contains('Краторная булка N-200i').scrollIntoView().click({ force: true });
    });

    cy.url().should('include', '/ingredients/643d69a5c3f7b9001cfa093c');
    cy.go('back');
    cy.url().should('eq', 'http://localhost:4000/');
    cy.contains('Соберите бургер').should('be.visible');
  });

  it('должна закрывать модальное окно по клику на крестик', () => {
    cy.get('[data-cy="ingredients-section"]').within(() => {
      cy.contains('Краторная булка N-200i').scrollIntoView().click({ force: true });
    });

    cy.get('[data-cy="close-modal-btn"]').should('exist').click({ force: true });
    cy.url().should('eq', 'http://localhost:4000/');
  });

  it('должна закрывать модальное окно по клику на оверлей', () => {
    cy.get('[data-cy="ingredients-section"]').within(() => {
      cy.contains('Краторная булка N-200i').scrollIntoView().click({ force: true });
    });

    cy.get('[data-cy="modal"]').should('be.visible');
    cy.get('[data-cy="modal-overlay"]').click({ force: true });
    cy.get('[data-cy="modal"]').should('not.exist');
  });

  it('должна создавать заказ для авторизованного пользователя', () => {
    cy.window().then((win) => {
      win.localStorage.setItem('refreshToken', 'test-refresh-token');
      win.document.cookie = 'accessToken=Bearer test-access-token';
    });

    cy.reload();
    cy.wait('@getIngredients', { timeout: 10000 });

    cy.get('[data-cy="ingredients-section"]').within(() => {
      cy.contains('Краторная булка N-200i')
        .parents('[data-cy="ingredient-item"]')
        .find('button')
        .contains('Добавить')
        .click({ force: true });
    });

    cy.get('[data-cy="ingredients-section"]').within(() => {
      cy.contains('Мясо бессмертных моллюсков Protostomia')
        .parents('[data-cy="ingredient-item"]')
        .find('button')
        .contains('Добавить')
        .click({ force: true });
    });

    cy.get('[data-cy="order-button"]').click();
    cy.wait('@createOrder', { timeout: 10000 });
    cy.get('[data-cy="order-number"]').should('have.text', '12345');
  });

  it('должна очищать конструктор после успешного заказа', () => {
    cy.window().then((win) => {
      win.localStorage.setItem('refreshToken', 'test-refresh-token');
      win.document.cookie = 'accessToken=Bearer test-access-token';
    });

    cy.visit('/');
    cy.wait('@getIngredients', { timeout: 10000 });

    cy.get('[data-cy="ingredients-section"]').within(() => {
      cy.contains('Краторная булка N-200i')
        .parents('[data-cy="ingredient-item"]')
        .find('button')
        .contains('Добавить')
        .click({ force: true });
    });

    cy.get('[data-cy="ingredients-section"]').within(() => {
      cy.contains('Мясо бессмертных моллюсков Protostomia')
        .parents('[data-cy="ingredient-item"]')
        .find('button')
        .contains('Добавить')
        .click({ force: true });
    });

    cy.get('[data-cy="no_bun_text_1"]').should('not.exist');
    cy.get('[data-cy="no_bun_text_2"]').should('not.exist');
    cy.get('[data-cy="no_ingredients_text"]').should('not.exist');

    cy.get('[data-cy="order-button"]').click();
    cy.wait('@createOrder', { timeout: 10000 });

    cy.get('[data-cy="order-number"]').should('have.text', '12345');

    cy.get('[data-cy="modal-overlay"]').click({ force: true });
    cy.get('[data-cy="modal"]').should('not.exist');

    cy.get('[data-cy="no_bun_text_1"]').should('be.visible');
    cy.get('[data-cy="no_bun_text_2"]').should('be.visible');
    cy.get('[data-cy="no_ingredients_text"]').should('be.visible');
  });
});