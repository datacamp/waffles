describe('Branding Asset', () => {
  it('render all available Branding assets', () => {
    cy.loadStory('branding-asset-variants');
    cy.findAllByTestId('branding-asset-row').should('have.length', 4);
  });

  it('render all available Branding assets as inverted', () => {
    cy.loadStory('branding-asset-inverted');
    cy.findAllByTestId('branding-asset-row').should('have.length', 4);
  });

  it('render all available Branding assets as monochrome', () => {
    cy.loadStory('branding-asset-monochrome');
    cy.findAllByTestId('branding-asset-row').should('have.length', 4);
  });
});
