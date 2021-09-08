describe('CodeBlock', () => {
  it('render basic code block', () => {
    cy.loadStory('code-block-basic');
    cy.get('main').find('pre').should('have.length', 1);
  });

  it('renders proper focus state', () => {
    cy.loadStory('code-block-basic');
    cy.get('main').find('pre').focus();
  });

  it('render all sizes', () => {
    cy.loadStory('code-block-sizes');
    cy.get('main').find('pre').should('have.length', 4);
  });
});
