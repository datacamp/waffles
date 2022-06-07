describe('Avatar', () => {
  it('render avatar in all different sizes', () => {
    cy.loadStory('avatar-sizes');
    cy.findAllByTestId('avatar').should('have.length', 8);
  });
});
