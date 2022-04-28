describe('Button', () => {
  it('renders as a basic button by default', () => {
    cy.loadStory('button-basic');
    cy.get('button').should('have.length', 1);
  });

  it('renders proper focus state', () => {
    cy.loadStory('button-basic');
    cy.get('button').focus();
  });

  it('renders with custom styles applied', () => {
    cy.loadStory('button-styled');
    cy.findByText('Button with Custom Styles').should('exist');
  });

  it('renders as a link', () => {
    cy.loadStory('button-as-link');
    cy.get('a')
      .should('have.length', 1)
      .and('have.attr', 'href')
      .and('include', 'https://datacamp.com');
  });

  it('render full width buttons', () => {
    cy.loadStory('button-full-width');
    cy.get('button').should('have.length', 10);
  });

  it('render all variants and sizes, when disabled and inverted', () => {
    cy.loadStory('button-variants-and-sizes');
    cy.get('button').should('have.length', 60);
  });

  it('render all variants and sizes with various icons', () => {
    cy.loadStory('button-with-icons');
    cy.get('button').should('have.length', 63);
  });
});
