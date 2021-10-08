describe('Display', () => {
  it('renders a basic text and inverted variant', () => {
    cy.loadStory('display-basic');
    cy.findByText('Big and short non-semantic message').should('exist');
    cy.findByText('Big and short non-semantic message inverted').should(
      'exist',
    );
  });

  it('renders with custom styles applied', () => {
    cy.loadStory('display-styled');
    cy.get('main').find('p').should('have.length', 1);
  });
});
