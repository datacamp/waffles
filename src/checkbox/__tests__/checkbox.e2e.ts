describe('Checkbox', () => {
  it('renders a basic checkbox', () => {
    cy.loadStory('checkbox-basic');
    cy.get('main').find('input[type=checkbox]').should('have.length', 1);
  });

  it('renders proper focus state', () => {
    cy.loadStory('checkbox-basic');
    cy.get('main').find('input[type=checkbox]').focus();
  });

  it('renders with error', () => {
    cy.loadStory('checkbox-error');
    cy.get('main').find('input[type=checkbox]').should('have.length', 4);
  });

  it('render inverted and disabled', () => {
    cy.loadStory('checkbox-inverted-disabled');
    cy.get('main').find('input[type=checkbox]').should('have.length', 8);
  });

  it('changes to ticked when label is clicked', () => {
    cy.loadStory('checkbox-basic');
    cy.get('main').findByText('Basic checkbox').click();
  });

  it('changes to unticked, when already ticked checkbox label is clicked', () => {
    cy.loadStory('checkbox-basic');
    cy.get('main').findByText('Basic checkbox').click();
    cy.get('main').findByText('Basic checkbox').click();
  });
});
