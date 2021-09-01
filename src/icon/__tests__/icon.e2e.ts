describe('Icon', () => {
  it('render all availbable icons in different sizes', () => {
    cy.loadStory('icon-sizes');
    cy.injectAxe();

    cy.findAllByTestId('icon-row').should('have.length', 190);
    cy.a11yCheck();
  });
});
