describe('DataCamp Branding', () => {
  it('render all available DataCamp branding assets', () => {
    cy.loadStory('datacamp-branding-variants');
    cy.findAllByTestId('datacamp-branding-row').should('have.length', 4);
  });

  it('render all available DataCamp branding assets as inverted', () => {
    cy.loadStory('datacamp-branding-inverted');
    cy.findAllByTestId('datacamp-branding-row').should('have.length', 4);
  });

  it('render all available DataCamp branding assets as monochrome', () => {
    cy.loadStory('datacamp-branding-monochrome');
    cy.findAllByTestId('datacamp-branding-row').should('have.length', 4);
  });
});
