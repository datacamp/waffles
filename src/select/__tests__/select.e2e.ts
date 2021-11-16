describe('Select', () => {
  it('renders a basic select', () => {
    cy.loadStory('select-basic');
    cy.get('main').find('select').should('have.length', 1);
  });

  it('renders proper focus state', () => {
    cy.loadStory('select-basic');
    cy.get('main').findByText('Basic select').click();
  });

  it('renders with custom styles applied', () => {
    cy.loadStory('select-styled');
    cy.get('main').find('select').should('have.length', 1);
  });

  it('renders with error', () => {
    cy.loadStory('select-error');
    cy.get('main').find('select').should('have.length', 2);
  });

  it('renders a placeholder', () => {
    cy.loadStory('select-placeholder');
    cy.get('main').find('select').should('have.length', 1);
  });

  it('renders required indicator', () => {
    cy.loadStory('select-required');
    cy.get('main').findAllByText('Required').should('have.length', 2);
  });

  it('render all sizes, with inverted and disabled', () => {
    cy.loadStory('select-sizes');
    cy.get('main').find('select').should('have.length', 12);
  });

  it('after an option got selected, the value got updated', () => {
    cy.loadStory('select-basic');
    cy.get('main').find('select').select('SQL');
    cy.get('main').find('select').should('have.value', 'sql');
  });
});
