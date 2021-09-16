describe('Portal', () => {
  it('renders content correctly', () => {
    cy.loadStory('portal-basic');
    cy.findByText(/custom portal content/i).should('exist');
  });
});
