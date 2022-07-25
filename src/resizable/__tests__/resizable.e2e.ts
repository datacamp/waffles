describe('Resizable', () => {
  it('renders in column layout', () => {
    cy.loadStory('resizable-column');
    cy.get('main').find('p').should('have.length', 3);
    cy.get('main').findAllByRole('separator').should('have.length', 2);
  });

  it('renders in row layout', () => {
    cy.loadStory('resizable-row');
    cy.get('main').find('p').should('have.length', 3);
    cy.get('main').findAllByRole('separator').should('have.length', 2);
  });

  it('renders rows nested into columns', () => {
    cy.loadStory('resizable-nested');
    cy.get('main').find('p').should('have.length', 4);
    cy.get('main').findAllByRole('separator').should('have.length', 3);
  });

  it('renders inverted', () => {
    cy.loadStory('resizable-inverted');
    cy.get('main').find('p').should('have.length', 3);
    cy.get('main').findAllByRole('separator').should('have.length', 2);
  });

  it('renders with dividers hidden', () => {
    cy.loadStory('resizable-no-dividers');
    cy.get('main').find('p').should('have.length', 3);
    cy.get('main').findAllByRole('separator').should('have.length', 2);
  });

  it('in column layout, could be resized by pressing left / right arrow key', () => {
    cy.loadStory('resizable-column');
    cy.get('main').findAllByRole('separator').first().focus();
    cy.get('body').type(
      '{rightarrow}{rightarrow}{rightarrow}{leftarrow}{rightarrow}',
    );
    cy.get('main').find('p').should('have.length', 3);
  });

  it('in row layout, could be resized by pressing down / up arrow key', () => {
    cy.loadStory('resizable-row');
    cy.get('main').findAllByRole('separator').first().focus();
    cy.get('body').type(
      '{downarrow}{downarrow}{downarrow}{uparrow}{downarrow}',
    );
    cy.get('main').find('p').should('have.length', 3);
  });
});
