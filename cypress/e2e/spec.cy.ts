describe('Shell', () => {
  it('Registers and use URL Param', () => {
    // Intercept the API request triggered by the form submission
    cy.intercept('POST', 'http://localhost:3000/users').as('registerRequest'); // Replace '/api/register' with the actual endpoint

    cy.visit('/');

    // Assert that the welcome text is visible
    cy.contains('Com Itaú, tá feito').should('be.visible');

    // Click the "Cadastrar" button
    cy.get('ds-button[text="Cadastrar"]').click();
    cy.url().should('include', '/cadastro');

    // Enter "Fabiano Moraes" in the first input
    cy.get('ds-input[formControlName="name"] input').type('Fabiano Moraes');

    // Enter "fabiano@gmail.com" in the second input
    cy.get('ds-input[formControlName="email"] input').type('fabiano@gmail.com');

    // Assert that the submit button is not disabled
    cy.get('button[type="submit"]').should('not.be.disabled');

    // Click the submit button
    cy.get('button[type="submit"]').click();

    // Wait for the API request to complete
    cy.wait('@registerRequest');

    // Assert navigation to the success page
    cy.url().should('include', '/sucesso');

    // Assert that the "Sucesso!" text is visible
    cy.contains('Sucesso!').should('be.visible');

    // Assert that the "Tipo: URL Params" text is visible
    cy.contains('Tipo: URL Params').should('be.visible');
  });

  it.only('Registers and use API', () => {
    // Intercept the API request triggered by the form submission
    cy.intercept('POST', 'http://localhost:3000/users').as('registerRequest'); // Replace '/api/register' with the actual endpoint

    cy.visit('/');

    // Assert that the welcome text is visible
    cy.contains('Com Itaú, tá feito').should('be.visible');

    // Click the "Cadastrar" button
    cy.get('ds-button[text="Cadastrar"]').click();
    cy.url().should('include', '/cadastro');

    // Enter "Fabiano Moraes" in the first input
    cy.get('ds-input[formControlName="name"] input').type('Fabiano Moraes');

    // Enter "fabiano@gmail.com" in the second input
    cy.get('ds-input[formControlName="email"] input').type('fabiano@gmail.com');

    // Click any element containing the text "API"
    cy.contains('API').click();
    // Assert that the submit button is not disabled
    cy.get('button[type="submit"]').should('not.be.disabled');

    // Click the submit button
    cy.get('button[type="submit"]').click();

    // Wait for the API request to complete
    cy.wait('@registerRequest');

    // Assert navigation to the success page
    cy.url().should('include', '/sucesso');

    // Assert that the "Sucesso!" text is visible
    cy.contains('Sucesso!').should('be.visible');

    // Assert that the "Tipo: API" text is visible
    cy.contains('Tipo: API').should('be.visible');
  });
});
