describe('Code', () => {
  it('render all sizes', () => {
    cy.loadStory('code-sizes');
    cy.injectAxe();

    cy.get('main').find('code').should('have.length', 4);
    cy.a11yCheck();
  });
});
