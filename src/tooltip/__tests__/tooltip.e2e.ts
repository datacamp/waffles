describe('Tooltip', () => {
  it('renders a tooltip after trigger element got focused', () => {
    cy.loadStory('tooltip-basic');
    cy.get('button').focus();
    cy.findByRole('tooltip').should('exist');
  });

  it('renders a tooltip after after mouse hovered over trigger', () => {
    cy.loadStory('tooltip-basic');
    cy.get('button').trigger('mouseover');
    cy.findByRole('tooltip').should('exist');
  });

  it('renders an inverted tooltip', () => {
    cy.loadStory('tooltip-inverted');
    cy.get('button').trigger('mouseover');
    cy.findByRole('tooltip').should('exist');
  });

  it('renders with custom styles applied', () => {
    cy.loadStory('tooltip-styled');
    cy.get('button').trigger('mouseover');
    cy.findByRole('tooltip').should('exist');
  });

  it('renders a long content', () => {
    cy.loadStory('tooltip-long-content');
    cy.get('button').trigger('mouseover');
    cy.findByRole('tooltip').should('exist');
  });
});
