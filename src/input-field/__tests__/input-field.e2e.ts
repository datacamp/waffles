// A lot of features are already covered by Input stories

describe('InputField', () => {
  it('renders a basic input field', () => {
    cy.loadStory('input-field-basic');
    cy.get('main').find('input').should('have.length', 1);
    cy.get('main').find('label').should('have.length', 1);
  });

  it('renders proper focus state', () => {
    cy.loadStory('input-field-basic');
    cy.get('main').findByText('Basic input field').click();
    cy.get('main').find('input').should('have.focus');
  });

  it('renders with custom styles applied', () => {
    cy.loadStory('input-field-styled');
    cy.get('main').find('input').should('have.length', 1);
  });

  it('renders with error', () => {
    cy.loadStory('input-field-error');
    cy.get('main')
      .findAllByText(/provide correct value/i)
      .should('have.length', 3);
  });

  it('renders required indicator', () => {
    cy.loadStory('input-field-required');
    cy.get('main').findAllByText('Required').should('have.length', 2);
  });

  it('render all sizes, with inverted and disabled', () => {
    cy.loadStory('input-field-sizes');
    cy.get('main').find('input').should('have.length', 12);
  });

  it('render all sizes with various enhancers', () => {
    cy.loadStory('input-field-with-enhancers');
    cy.get('main').find('input').should('have.length', 6);
    cy.get('main').find('button').should('have.length', 6);
  });

  it('render enhanced search and password types', () => {
    cy.loadStory('input-field-types');
    cy.get('main').find('input[type=search]').should('have.length', 2);
    cy.get('main').find('input[type=password]').should('have.length', 2);
  });

  it('when typing text the value got updated', () => {
    cy.loadStory('input-field-basic');
    cy.get('main').find('input').type('Data Camp');
    cy.get('main').find('input').should('have.value', 'Data Camp');
  });
});
