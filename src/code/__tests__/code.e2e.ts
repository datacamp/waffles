describe('Code', () => {
  it('render all sizes', () => {
    cy.loadStory('code-sizes');
    cy.get('main').find('code').should('have.length', 6);
  });
});
