describe('Input', () => {
  it('renders a basic input', () => {
    cy.loadStory('input-basic');
    cy.get('main').find('input').should('have.length', 1);
  });

  it('renders proper focus state', () => {
    cy.loadStory('input-basic');
    cy.get('main').find('input').focus();
  });

  it('renders with custom styles applied', () => {
    cy.loadStory('input-styled');
    cy.get('main').find('input').should('have.length', 1);
  });

  it('renders with error', () => {
    cy.loadStory('input-error');
    cy.get('main').find('input').should('have.length', 2);
  });

  it('render all sizes, with inverted and disabled', () => {
    cy.loadStory('input-sizes');
    cy.get('main').find('input').should('have.length', 12);
  });

  it('render all variants and sizes with various enhancers', () => {
    cy.loadStory('input-with-enhancers');
    cy.get('main').find('input').should('have.length', 17);
    cy.get('main').find('button').should('have.length', 11);
  });

  it('render enhanced search and password types', () => {
    cy.loadStory('input-types');
    cy.get('main').find('input[type=search]').should('have.length', 2);
    cy.get('main').find('input[type=password]').should('have.length', 2);
  });

  it('when typing text the value got updated', () => {
    cy.loadStory('input-basic');
    cy.get('main').find('input').type('Data Camp');
    cy.get('main').find('input').should('have.value', 'Data Camp');
  });

  it("after clicking 'Show password text' password is revealed", () => {
    cy.loadStory('input-password');
    cy.get('main').findByLabelText('Show password text').click();
    cy.get('main')
      .find('input')
      .should('have.attr', 'type')
      .should('eq', 'text');
    cy.get('main').find('input').should('have.value', 'password1');
  });

  it("after clicking 'Hide password text' password is hidden", () => {
    cy.loadStory('input-password');
    cy.get('main').findByLabelText('Show password text').click();
    cy.get('main').findByLabelText('Hide password text').click();
    cy.get('main')
      .find('input')
      .should('have.attr', 'type')
      .should('eq', 'password');
  });
});
