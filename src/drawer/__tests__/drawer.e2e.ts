const screenSizes: Record<string, [number, number]> = {
  small: [375, 800],
  medium: [768, 1024],
  large: [1920, 1080],
};

describe('Drawer', () => {
  describe('it renders correctly to the left', () => {
    Object.keys(screenSizes).forEach((size) => {
      const [width, height] = screenSizes[size];

      it(`on ${size} screen device`, () => {
        cy.viewport(width, height);
        cy.loadStory('drawer-placement');
        cy.findByText('Open on Left').click();
        cy.findByTestId('left-drawer').should('exist');
        cy.findByTestId('drawer-overlay').should('exist');
      });
    });
  });

  describe('it renders correctly to the right', () => {
    Object.keys(screenSizes).forEach((size) => {
      const [width, height] = screenSizes[size];

      it(`on ${size} screen device`, () => {
        cy.viewport(width, height);
        cy.loadStory('drawer-placement');
        cy.findByText('Open on Right').click();
        cy.findByTestId('right-drawer').should('exist');
        cy.findByTestId('drawer-overlay').should('exist');
      });
    });
  });

  describe('when content is very long, it renders correctly', () => {
    Object.keys(screenSizes).forEach((size) => {
      const [width, height] = screenSizes[size];

      it(`on ${size} screen device`, () => {
        cy.viewport(width, height);
        cy.loadStory('drawer-long-content');
        cy.findByText('Open').click();
        cy.findByTestId('drawer').should('exist');
        cy.findByTestId('drawer-overlay').should('exist');
      });
    });

    it('and subtle shadow is shown at the bottom of drawer body', () => {
      cy.loadStory('drawer-long-content');
      cy.findByText('Open').click();
      cy.findByTestId('drawer').should('exist');
    });

    it('and subtle shadow is shown at the bottom, and at the top of dialog body, when it is scrolled to the middle', () => {
      cy.loadStory('drawer-long-content');
      cy.findByText('Open').click();
      cy.findByTestId('drawer-body').scrollTo(0, 100);
      cy.findByTestId('drawer').should('exist');
    });

    it('subtle shadow is shown at the top of dialog body, when it is scrolled to the bottom', () => {
      cy.loadStory('drawer-long-content');
      cy.findByText('Open').click();
      cy.findByTestId('drawer-body').scrollTo('bottom');
      cy.findByTestId('drawer').should('exist');
    });
  });

  it('after clicking on the Close button, it disappears', () => {
    cy.loadStory('drawer-placement');
    cy.findByText('Open on Left').click();
    cy.wait(500);
    cy.findByTestId('left-drawer').findByLabelText('Close').click();
    cy.findByTestId('drawer-overlay').should('not.exist');
  });

  it('after clicking on the overlay, it disappears', () => {
    cy.loadStory('drawer-placement');
    cy.findByText('Open on Right').click();
    cy.wait(500);
    cy.findByTestId('drawer-overlay').click({ force: true });
    cy.findByRole('right-drawer').should('not.exist');
    cy.findByTestId('drawer-overlay').should('not.exist');
  });

  it('after opening it via keyboard, one of the predefined buttons in the footer is focused', () => {
    cy.loadStory('drawer-placement');
    cy.findByText('Open on Left').type('{enter}');
    cy.findByText('Confirm').should('exist');
  });
});

export {};
