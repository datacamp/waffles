describe('Display', () => {
  it('renders a basic text', () => {
    cy.loadStory('display-basic');
    cy.injectAxe();

    cy.findByText('Big and short non-semantic message').should('exist');
    cy.a11yCheck();
  });

  it('renders with custom styles applied', () => {
    cy.loadStory('display-styled');
    cy.injectAxe();

    cy.get('main').find('p').should('have.length', 1);
    cy.a11yCheck();
  });
});
