describe('TextArea', () => {
  it('renders a basic text area', () => {
    cy.loadStory('text-area-basic');
    cy.get('main').find('textarea').should('have.length', 1);
    cy.get('main').find('label').should('have.length', 1);
  });

  it('renders proper focus state', () => {
    cy.loadStory('text-area-basic');
    cy.get('main').findByText('Basic textarea').click();
    cy.get('main').find('textarea').should('have.focus');
  });

  it('renders with custom styles applied', () => {
    cy.loadStory('text-area-styled');
    cy.get('main').find('textarea').should('have.length', 1);
  });

  it('renders with error', () => {
    cy.loadStory('text-area-error');
    cy.get('main')
      .findByText(/provide correct value/i)
      .should('exist');
  });

  it('renders required indicator', () => {
    cy.loadStory('text-area-required');
    cy.get('main').findAllByText('Required').should('have.length', 2);
  });

  it('render inverted and disabled', () => {
    cy.loadStory('text-area-inverted-disabled');
    cy.get('main').find('textarea').should('have.length', 4);
  });

  it('when typing text the value got updated', () => {
    cy.loadStory('text-area-basic');
    cy.get('main').find('textarea').type('Data Camp');
    cy.get('main').find('textarea').should('have.value', 'Data Camp');
  });

  it('grows in height whith each new row, when autoGrow is set', () => {
    cy.loadStory('text-area-auto-grow');
    cy.get('main')
      .find('textarea')
      .type(
        'Learn the data skills{enter}you need online at{enter}your own pace.{enter}Start your own data analysis{enter}in seconds.',
      );
    cy.get('main')
      .find('textarea')
      .should(
        'have.value',
        'Learn the data skills\nyou need online at\nyour own pace.\nStart your own data analysis\nin seconds.',
      );
  });
});
