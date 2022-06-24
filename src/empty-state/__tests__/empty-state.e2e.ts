describe('EmptyState', () => {
  it('render a basic empty state', () => {
    cy.loadStory('empty-state-basic');
    cy.findByTestId('empty-state').should('exist');
  });

  it('render a centered empty state with vertical orientation', () => {
    cy.loadStory('empty-state-centered');
    cy.findByTestId('empty-state').should('exist');
  });

  it('render an empty state in each orientation', () => {
    cy.loadStory('empty-state-orientation');
    cy.findAllByTestId('empty-state').should('have.length', 2);
  });

  it('render an inverted empty state', () => {
    cy.loadStory('empty-state-inverted');
    cy.findByTestId('empty-state').should('exist');
  });
});
