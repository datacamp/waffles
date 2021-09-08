describe('Link', () => {
  it('renders a basic link', () => {
    cy.loadStory('link-basic');
    cy.get('a').should('have.length', 1);
  });

  it('renders inverted link', () => {
    cy.loadStory('link-inverted');
    cy.get('a').should('have.length', 1);
  });

  it('renders proper focus state', () => {
    cy.loadStory('link-basic');
    cy.get('a').focus();
  });

  it('renders with custom styles applied', () => {
    cy.loadStory('link-styled');
    cy.findByText('Go to DataCamp website').should('exist');
  });

  it('render regular and inverted with various icons', () => {
    cy.loadStory('link-with-icons');
    cy.get('a').should('have.length', 9);
  });
});
