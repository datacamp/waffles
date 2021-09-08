describe('Text', () => {
  it('renders a basic text', () => {
    cy.loadStory('text-basic');
    cy.injectAxe();

    cy.findByText('Basic short text content');
    cy.a11yCheck();
  });

  it('renders with custom styles applied', () => {
    cy.loadStory('text-styled');
    cy.injectAxe();

    cy.get('span').should('have.length', 1);
    cy.a11yCheck();
  });
});
