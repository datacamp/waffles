describe('Logomark', () => {
  it('render all available logomarks', () => {
    cy.loadStory('logomark-variants');
    cy.findAllByTestId('logomark-row').should('have.length', 11);
  });
});
