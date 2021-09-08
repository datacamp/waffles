describe('Chapeau', () => {
  it('renders a basic text', () => {
    cy.loadStory('chapeau-basic');
    cy.injectAxe();

    cy.findByText('Short title above heading').should('exist');
    cy.a11yCheck();
  });

  it('renders with custom styles applied', () => {
    cy.loadStory('chapeau-styled');
    cy.injectAxe();

    cy.get('main').find('p').should('have.length', 1);
    cy.a11yCheck();
  });
});
