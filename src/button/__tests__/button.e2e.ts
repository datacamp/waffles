describe('Button', () => {
  it('renders as a basic button by default', () => {
    cy.loadStory('button-basic');
    cy.injectAxe();

    cy.get('button').should('have.length', 1);
    cy.a11yCheck();
  });

  it('renders with custom styles applied', () => {
    cy.loadStory('button-styled');
    cy.injectAxe();

    cy.findByText('Button with Custom Styles');
    cy.a11yCheck();
  });

  it('renders proper focus state', () => {
    cy.loadStory('button-basic');
    cy.injectAxe();

    cy.get('button').focus();
    cy.a11yCheck();
  });

  it('renders as a link', () => {
    cy.loadStory('button-as-link');
    cy.injectAxe();

    cy.get('a')
      .should('have.length', 1)
      .and('have.attr', 'href')
      .and('include', 'https://datacamp.com');
    cy.a11yCheck();
  });

  it('render full width buttons', () => {
    cy.loadStory('button-full-width');
    cy.injectAxe();

    cy.get('button').should('have.length', 8);
    cy.a11yCheck();
  });

  it('render all varaints and sizes, when disabled and inverted', () => {
    cy.loadStory('button-variants-and-sizes');
    cy.injectAxe();

    cy.get('button').should('have.length', 48);
    cy.a11yCheck();
  });

  it('render all variants and sizes with various icons', () => {
    cy.loadStory('button-with-icons');
    cy.injectAxe();

    cy.get('button').should('have.length', 51);
    cy.a11yCheck();
  });
});
