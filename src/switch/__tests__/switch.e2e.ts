describe('Switch', () => {
  it('renders a basic switch', () => {
    cy.loadStory('switch-basic');
    cy.get('main').findByRole('switch').should('have.length', 1);
  });

  it('renders proper focus state', () => {
    cy.loadStory('switch-basic');
    cy.get('main').findByRole('switch').focus();
  });

  it('renders with error', () => {
    cy.loadStory('switch-error');
    cy.get('main').findAllByRole('switch').should('have.length', 2);
  });

  it('render inverted and disabled', () => {
    cy.loadStory('switch-inverted-disabled');
    cy.get('main').findAllByRole('switch').should('have.length', 8);
  });

  it('changes to toggled on when label is clicked', () => {
    cy.loadStory('switch-basic');
    cy.get('main').findByText('Basic switch').click();
    cy.get('main')
      .findByRole('switch')
      .should('have.attr', 'aria-checked')
      .should('eq', 'true');
  });

  it('changes to untoggled, when already toggled on switch label is clicked', () => {
    cy.loadStory('switch-basic');
    cy.get('main').findByText('Basic switch').click();
    cy.get('main').findByText('Basic switch').click();
    cy.get('main')
      .findByRole('switch')
      .should('have.attr', 'aria-checked')
      .should('eq', 'false');
  });
});
