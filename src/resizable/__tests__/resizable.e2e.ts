describe('Resizable', () => {
  it('renders in vertical orientation', () => {
    cy.loadStory('resizable-vertical');
    cy.get('main').find('p').should('have.length', 3);
    cy.get('main').findAllByRole('separator').should('have.length', 2);
  });

  it('renders in horizontal orientation', () => {
    cy.loadStory('resizable-horizontal');
    cy.get('main').find('p').should('have.length', 3);
    cy.get('main').findAllByRole('separator').should('have.length', 2);
  });

  it('renders horizontal nested into vertical', () => {
    cy.loadStory('resizable-nested');
    cy.get('main').find('p').should('have.length', 4);
    cy.get('main').findAllByRole('separator').should('have.length', 3);
  });

  it('renders inverted', () => {
    cy.loadStory('resizable-inverted');
    cy.get('main').find('p').should('have.length', 3);
    cy.get('main').findAllByRole('separator').should('have.length', 2);
  });

  it('renders with separators hidden', () => {
    cy.loadStory('resizable-no-separators');
    cy.get('main').find('p').should('have.length', 3);
    cy.get('main').findAllByRole('separator').should('have.length', 2);
  });

  it('in vertical orientation could be resized by pressing left / right arrow key', () => {
    cy.loadStory('resizable-vertical');
    cy.get('main').findAllByRole('separator').first().focus();
    cy.get('body').type(
      '{rightarrow}{rightarrow}{rightarrow}{leftarrow}{rightarrow}',
    );
    cy.get('main').find('p').should('have.length', 3);
  });

  it('in horizontal orientation could be resized by pressing down / up arrow key', () => {
    cy.loadStory('resizable-horizontal');
    cy.get('main').findAllByRole('separator').first().focus();
    cy.get('body').type(
      '{downarrow}{downarrow}{downarrow}{uparrow}{downarrow}',
    );
    cy.get('main').find('p').should('have.length', 3);
  });
});
