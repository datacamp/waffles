describe('Heading', () => {
  it('render all sizes', () => {
    cy.loadStory('heading-sizes');
    cy.get('main').find('h1').should('have.length', 1);
    cy.get('main').find('h2').should('have.length', 1);
    cy.get('main').find('h3').should('have.length', 1);
    cy.get('main').find('h4').should('have.length', 1);
  });

  it('renders with custom styles applied', () => {
    cy.loadStory('heading-styled');
    cy.get('main').find('h2').should('have.length', 1);
  });
});
