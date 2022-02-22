describe('TextArea', () => {
  it('renders a basic text area', () => {
    cy.loadStory('text-area-basic');
    cy.get('main').find('textarea').should('have.length', 1);
  });

  it('renders proper focus state', () => {
    cy.loadStory('text-area-basic');
    cy.get('main').findByLabelText('Basic text area').focus();
    cy.get('main').find('textarea').should('have.focus');
  });

  it('renders with custom styles applied', () => {
    cy.loadStory('text-area-styled');
    cy.get('main').find('textarea').should('have.length', 1);
  });

  it('renders with error', () => {
    cy.loadStory('text-area-error');
    cy.get('main').find('textarea').should('have.length', 1);
  });

  it('render inverted and disabled', () => {
    cy.loadStory('text-area-inverted-disabled');
    cy.get('main').find('textarea').should('have.length', 6);
    cy.get('main').findAllByText('9 / 100').should('have.length', 2);
  });

  it('when typing text the value got updated', () => {
    cy.loadStory('text-area-basic');
    cy.get('main').find('textarea').type('Data Camp');
    cy.get('main').find('textarea').should('have.value', 'Data Camp');
  });

  it('displays correct character count', () => {
    cy.loadStory('text-area-character-count');
    cy.get('main').find('textarea').type('Data Camp');
    cy.get('main').findByText('9 / 20').should('exist');
  });

  it('if max lenght limit is specified, show only that many characters', () => {
    cy.loadStory('text-area-character-count');
    cy.get('main')
      .find('textarea')
      .type('This sentence is exceeding text area character limit.');
    cy.get('main').findByText('20 / 20').should('exist');
    cy.get('main')
      .find('textarea')
      .should('have.value', 'This sentence is exc');
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
