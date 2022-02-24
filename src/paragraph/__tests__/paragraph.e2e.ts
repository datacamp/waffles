describe('Paragraph', () => {
  it('render all variants and sizes', () => {
    cy.loadStory('paragraph-variants-and-sizes');
    cy.get('main').find('p').should('have.length', 24);
  });

  it('renders with custom styles applied', () => {
    cy.loadStory('paragraph-styled');
    cy.get('main').find('p').should('have.length', 1);
  });
});
