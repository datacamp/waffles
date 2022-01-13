describe('Badge', () => {
  it('render all sizes with different colors and content lenght', () => {
    cy.loadStory('badge-sizes-and-colors');
    cy.get('main').findAllByText('Label').should('have.length', 6);
    cy.get('main')
      .findAllByText('Very Long Badge Label')
      .should('have.length', 3);
    cy.get('main').findAllByText('Long Badge Label').should('have.length', 3);
  });
});
