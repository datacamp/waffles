describe('Icon', () => {
  it('render all availbable icons in different sizes', () => {
    cy.loadStory('icon-sizes');
    cy.findAllByTestId('icon-row').should('have.length', 203);
  });
});
