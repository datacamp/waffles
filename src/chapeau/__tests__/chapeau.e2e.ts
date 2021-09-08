describe('Chapeau', () => {
  it('renders a basic text', () => {
    cy.loadStory('chapeau-basic');
    cy.findByText('Short title above heading').should('exist');
  });

  it('renders with custom styles applied', () => {
    cy.loadStory('chapeau-styled');
    cy.get('main').find('p').should('have.length', 1);
  });
});
