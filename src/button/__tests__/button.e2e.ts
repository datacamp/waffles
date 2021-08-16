describe('Button', () => {
  it('renders correctly and has no detectable a11y violations', () => {
    cy.loadStory('basic-button');
    cy.injectAxe();

    cy.get('button').should('have.length', 1);
    cy.a11yCheck();
  });
});
