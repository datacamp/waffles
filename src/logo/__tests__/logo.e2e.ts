describe('Logo', () => {
  it('render all available logos', () => {
    cy.loadStory('logo-variants');
    cy.findAllByTestId('logo-row').should('have.length', 12);
  });
});
