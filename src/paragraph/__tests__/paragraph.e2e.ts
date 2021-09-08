describe('Paragraph', () => {
  it('render all varaints', () => {
    cy.loadStory('paragraph-variants');
    cy.injectAxe();

    cy.get('main').find('p').should('have.length', 8);
    cy.a11yCheck();
  });

  it('renders with custom styles applied', () => {
    cy.loadStory('paragraph-styled');
    cy.injectAxe();

    cy.get('main').find('p').should('have.length', 1);
    cy.a11yCheck();
  });
});
