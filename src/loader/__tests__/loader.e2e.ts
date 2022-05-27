describe('Loader', () => {
  it('renders a basic loader', () => {
    cy.loadStory('loader-basic');
    cy.findByTestId('loader-wrapper').should('exist');
  });

  it('renders inverted loader', () => {
    cy.loadStory('loader-inverted');
    cy.findByTestId('loader-wrapper').should('exist');
  });
});
