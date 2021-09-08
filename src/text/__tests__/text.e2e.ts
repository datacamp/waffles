describe('Text', () => {
  it('renders a basic text', () => {
    cy.loadStory('text-basic');
    cy.findByText('Basic short text content').should('exist');
  });

  it('renders with custom styles applied', () => {
    cy.loadStory('text-styled');
    cy.get('span').should('have.length', 1);
  });
});
