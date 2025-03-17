describe('form page', () => {
  it('on page load => button disabled', () => {
    cy.visit('/');
    cy.findByRole('button', {
      name: /get charts/i,
    }).should('be.disabled');
  });

  it('if city is valid => user can submit => weather charts displayed', () => {
    cy.visit('/');
    cy.findByRole('combobox').click();
    cy.findByRole('combobox').type('Montreal').type('{Enter}');
    // cy.findByRole('combobox').should('have.value', 'Montreal');
    cy.findByRole('button', {
      name: /get charts/i,
    }).should('be.enabled');
    cy.findByRole('button', {
      name: /get charts/i,
    }).click();
    cy.findByTestId('chart-location').should('have.text', 'Montreal');
  });

  it('if city is invalid => button disabled', () => {
    cy.visit('/');
    cy.findByRole('combobox').click();
    cy.findByRole('combobox').type('123@&^').type('{Enter}');
    cy.findByRole('button', {
      name: /get charts/i,
    }).should('be.disabled');
  });
});
