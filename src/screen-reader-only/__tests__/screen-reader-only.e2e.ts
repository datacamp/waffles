describe('ScreenReaderOnly', () => {
  it('visually hides content', () => {
    cy.loadStory('screen-reader-only-basic');
    cy.findByText('Go to DataCamp website').should('exist');
  });
});
