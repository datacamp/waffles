describe('Link', () => {
  it('renders a basic link', () => {
    cy.loadStory('link-basic');
    cy.injectAxe();

    cy.get('a').should('have.length', 1);
    cy.a11yCheck();
  });

  it('renders inverted link', () => {
    cy.loadStory('link-inverted');
    cy.injectAxe();

    cy.get('a').should('have.length', 1);
    cy.a11yCheck();
  });

  it('renders proper focus state', () => {
    cy.loadStory('link-basic');
    cy.injectAxe();

    cy.get('a').focus();
    cy.a11yCheck();
  });

  it('renders with custom styles applied', () => {
    cy.loadStory('link-styled');
    cy.injectAxe();

    cy.findByText('Go to DataCamp website').should('exist');
    cy.a11yCheck();
  });

  it('render regular and inverted with various icons', () => {
    cy.loadStory('link-with-icons');
    cy.injectAxe();

    cy.get('a').should('have.length', 9);
    cy.a11yCheck();
  });
});
