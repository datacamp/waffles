describe('Asset', () => {
  it('render all available assets', () => {
    cy.loadStory('asset-variants');
    cy.findAllByTestId('asset-row').should('have.length', 35);
  });
});
