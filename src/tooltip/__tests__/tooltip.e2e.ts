describe('Tooltip', () => {
  it('renders a tooltip after trigger element got focused', () => {
    cy.loadStory('tooltip-basic');
    cy.get('main').get('button').focus();
    cy.get('[role=tooltip]').should('exist');
  });

  it('renders a tooltip after after mouse hovered over trigger', () => {
    cy.loadStory('tooltip-basic');
    cy.get('main').get('button').trigger('mouseenter');
    cy.get('[role=tooltip]').should('exist');
  });

  it('renders an inverted tooltip', () => {
    cy.loadStory('tooltip-inverted');
    cy.get('main').get('button').trigger('mouseenter');
    cy.get('[role=tooltip]').should('exist');
  });

  it('renders with custom styles applied', () => {
    cy.loadStory('tooltip-styled');
    cy.get('main').get('button').trigger('mouseenter');
    cy.get('[role=tooltip]').should('exist');
  });

  it('renders a long content', () => {
    cy.loadStory('tooltip-long-content');
    cy.get('main').get('button').trigger('mouseenter');
    cy.get('[role=tooltip]').should('exist');
  });
});
