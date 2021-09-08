describe('Display', () => {
  it('renders a basic text', () => {
    cy.loadStory('display-basic');
    cy.findByText('Big and short non-semantic message').should('exist');
  });

  it('renders with custom styles applied', () => {
    cy.loadStory('display-styled');
    cy.get('main').find('p').should('have.length', 1);
  });
});
