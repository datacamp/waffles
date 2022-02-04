describe('Badge', () => {
  it('render all variants, and sizes with different content lenght', () => {
    cy.loadStory('badge-variants-and-sizes');
    cy.get('main').findAllByText('Label').should('have.length', 33);
    cy.get('main')
      .findAllByText('Very Long Badge Label')
      .should('have.length', 33);
    cy.get('main').findAllByText('Long Badge Label').should('have.length', 33);
  });
});
