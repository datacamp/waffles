const screenSizes: Record<string, [number, number]> = {
  small: [375, 800],
  medium: [768, 1024],
  large: [1920, 1080],
};

describe('Toast', () => {
  it('render a single toast', () => {
    cy.loadStory('toast-basic');
    cy.findByText('Show Toast').click();
    cy.findByText('Toast Title').should('exist');
    cy.findByText('Toast description.').should('exist');
    cy.get('li').should('exist');
    cy.get('ul').should('exist');
  });

  it('toast could be dismissed by clicking its close button', () => {
    cy.loadStory('toast-basic');
    cy.findByText('Show Toast').click();
    cy.wait(1000);
    cy.findByLabelText('Close').click();
    cy.findByText('Toast Title').should('not.exist');
    cy.findByTestId('toasts-list').should('not.exist');
  });

  it('toast closes automatically after 6 seconds', () => {
    cy.loadStory('toast-basic');
    cy.findByText('Show Toast').click();
    cy.wait(7000);
    cy.findByText('Toast Title').should('not.exist');
    cy.findByTestId('toasts-list').should('not.exist');
  });

  describe('render all variants', () => {
    Object.keys(screenSizes).forEach((size) => {
      const [width, height] = screenSizes[size];

      it(`on ${size} screen device`, () => {
        cy.viewport(width, height);
        cy.loadStory('toast-variants');
        // Force clicks for buttons obscured by toasts
        cy.findByText('Show Default Toast').click({ force: true });
        cy.findByText('Show Success Toast').click({ force: true });
        cy.findByText('Show Warning Toast').click({ force: true });
        cy.findByText('Show Error Toast').click({ force: true });
        cy.findAllByRole('status').should('have.length', 4);
        cy.get('li').should('have.length', 4);
        cy.get('ul').should('exist');
      });
    });
  });
});

export {};
