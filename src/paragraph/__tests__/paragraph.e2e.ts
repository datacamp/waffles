describe('Paragraph', () => {
  it('render all varaints', () => {
    cy.loadStory('paragraph-variants');
    cy.get('main').find('p').should('have.length', 8);
  });

  it('renders with custom styles applied', () => {
    cy.loadStory('paragraph-styled');
    cy.get('main').find('p').should('have.length', 1);
  });
});
