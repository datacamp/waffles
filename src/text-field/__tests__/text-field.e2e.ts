// A lot of features are already covered by Input stories

describe('TextField', () => {
  it('renders a basic text field', () => {
    cy.loadStory('text-field-basic');
    cy.get('main').find('input').should('have.length', 1);
    cy.get('main').find('label').should('have.length', 1);
  });

  it('renders proper focus state', () => {
    cy.loadStory('text-field-basic');
    cy.get('main').findByText('Basic text field').click();
    cy.get('main').find('input').should('have.focus');
  });

  it('renders with custom styles applied', () => {
    cy.loadStory('text-field-styled');
    cy.get('main').find('input').should('have.length', 1);
  });

  it('renders with error', () => {
    cy.loadStory('text-field-error');
    cy.get('main')
      .findByText(/provide correct value/i)
      .should('exist');
  });

  it('renders required indicator', () => {
    cy.loadStory('text-field-required');
    cy.get('main').findAllByText('Required').should('have.length', 2);
  });

  it('render all sizes, with inverted and disabled', () => {
    cy.loadStory('text-field-sizes');
    cy.get('main').find('input').should('have.length', 12);
  });

  it('render enhanced search and password types', () => {
    cy.loadStory('text-field-types');
    cy.get('main').find('input[type=search]').should('have.length', 2);
    cy.get('main').find('input[type=password]').should('have.length', 2);
  });

  it('when typing text the value got updated', () => {
    cy.loadStory('text-field-basic');
    cy.get('main').find('input').type('Data Camp');
    cy.get('main').find('input').should('have.value', 'Data Camp');
  });
});
