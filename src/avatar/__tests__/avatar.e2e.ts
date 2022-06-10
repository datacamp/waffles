describe('Avatar', () => {
  it('render avatar with text content', () => {
    cy.loadStory('avatar-text');
    cy.findAllByTestId('avatar').should('have.length', 1);
  });

  it('render avatar with icon content', () => {
    cy.loadStory('avatar-icon');
    cy.findAllByTestId('avatar').should('have.length', 1);
  });

  it('render avatar with asset content', () => {
    cy.loadStory('avatar-asset');
    cy.findAllByTestId('avatar').should('have.length', 1);
  });

  it('render avatar with image content', () => {
    cy.loadStory('avatar-image');
    cy.findAllByTestId('avatar').should('have.length', 1);
  });

  it('render avatar in all different sizes', () => {
    cy.loadStory('avatar-sizes');
    cy.findAllByTestId('avatar').should('have.length', 8);
  });

  it('render avatar in all different color variants', () => {
    cy.loadStory('avatar-variants');
    cy.findAllByTestId('avatar').should('have.length', 11);
  });
});
