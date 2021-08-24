describe('Icon', () => {
  it('render all availbable icons in different sizes with no detectable a11y violations', () => {
    cy.loadStory('icon-sizes');
    cy.injectAxe();

    cy.findAllByTestId('icon-row').should('have.length', 193);
    cy.a11yCheck();
  });
});
