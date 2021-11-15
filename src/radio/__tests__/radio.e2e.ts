describe('Radio', () => {
  it('renders a basic radio', () => {
    cy.loadStory('radio-basic');
    cy.get('main').find('input[type=radio]').should('have.length', 2);
  });

  it('renders proper focus state', () => {
    cy.loadStory('radio-basic');
    cy.get('main').find('input[value=radio1]').focus();
  });

  it('renders with error', () => {
    cy.loadStory('radio-error');
    cy.get('main').find('input[type=radio]').should('have.length', 4);
  });

  it('render inverted and disabled', () => {
    cy.loadStory('radio-inverted-disabled');
    cy.get('main').find('input[type=radio]').should('have.length', 4);
  });

  it('changes to selected, when label is clicked, and the other radio in group is deselected', () => {
    cy.loadStory('radio-basic');
    cy.get('main').findByText('Basic radio 2').click();
  });
});
