describe('Avatar', () => {
  it('render avatar in all different sizes', () => {
    cy.loadStory('avatar-sizes');
    cy.findAllByTestId('avatar').should('have.length', 8);
  });

  it('render avatar in all different color variants', () => {
    cy.loadStory('avatar-variants');
    cy.findAllByTestId('avatar').should('have.length', 11);
  });
});
