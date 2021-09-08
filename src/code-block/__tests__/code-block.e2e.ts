describe('CodeBlock', () => {
  it('render basic code block', () => {
    cy.loadStory('code-block-basic');
    cy.injectAxe();

    cy.get('main').find('pre').should('have.length', 1);
    cy.a11yCheck();
  });

  it('renders proper focus state', () => {
    cy.loadStory('code-block-basic');
    cy.injectAxe();

    cy.get('main').find('pre').focus();
    cy.a11yCheck();
  });

  it('render all sizes', () => {
    cy.loadStory('code-block-sizes');
    cy.injectAxe();

    cy.get('main').find('pre').should('have.length', 4);
    cy.a11yCheck();
  });
});
