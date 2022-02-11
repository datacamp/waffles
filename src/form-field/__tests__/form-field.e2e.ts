describe('FormField', () => {
  it('renders basic input', () => {
    cy.loadStory('form-field-basic');
    cy.get('main').find('input').should('exist');
    cy.get('main').find('label').should('exist');
    cy.get('main').findByText('Description of regular input').should('exist');
  });

  it('when typing text the value got updated', () => {
    cy.loadStory('form-field-basic');
    cy.get('main').find('input').type('Data Camp');
    cy.get('main').find('input').should('have.value', 'Data Camp');
  });

  it('renders proper focus state, after label got clicked', () => {
    cy.loadStory('form-field-basic');
    cy.get('main').findByText('Regular input').click();
    cy.get('main').find('input').should('have.focus');
  });

  it('renders various inputs with label and description', () => {
    cy.loadStory('form-field-label');
    cy.get('main').find('label').should('have.length', 3);
    cy.get('main')
      .findAllByText(/description/i)
      .should('have.length', 3);
  });

  it('renders with error', () => {
    cy.loadStory('form-field-error');
    cy.get('main')
      .findAllByText(/provide correct value/i)
      .should('have.length', 2);
    cy.get('main')
      .findByText(/provide one of the options/i)
      .should('exist');
  });

  it('renders required or optional indicator', () => {
    cy.loadStory('form-field-required-optional');
    cy.get('main').findAllByText('Required').should('have.length', 3);
    cy.get('main').findAllByText('Optional').should('have.length', 3);
  });

  it('render inverted and disabled inputs', () => {
    cy.loadStory('form-field-inverted-disabled');
    cy.get('main').find('input').should('have.length', 2);
    cy.get('main').find('textarea').should('have.length', 2);
    cy.get('main').find('select').should('have.length', 2);
  });
});
