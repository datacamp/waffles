const screenSizes: Record<string, [number, number]> = {
  small: [375, 800],
  medium: [768, 1024],
  large: [1920, 1080],
};

describe('Dialog', () => {
  describe('when the content is short, it renders correctly', () => {
    Object.keys(screenSizes).forEach((size) => {
      const [width, height] = screenSizes[size];

      it(`on ${size} screen device`, () => {
        cy.viewport(width, height);
        cy.loadStory('dialog-basic');
        cy.findByText('Open').click();
        cy.findByRole('dialog').should('exist');
        cy.findByTestId('dialog-overlay').should('exist');
      });
    });
  });

  describe('when content is very long, it renders correctly', () => {
    Object.keys(screenSizes).forEach((size) => {
      const [width, height] = screenSizes[size];

      it(`on ${size} screen device`, () => {
        cy.viewport(width, height);
        cy.loadStory('dialog-long-content');
        cy.findByText('Open').click();
        cy.findByRole('dialog').should('exist');
        cy.findByTestId('dialog-overlay').should('exist');
      });
    });

    it('and subtle shadow is shown at the bottom of dialog body', () => {
      cy.loadStory('dialog-long-content');
      cy.findByText('Open').click();
      cy.findByRole('dialog').should('exist');
    });

    it('and subtle shadow is shown at the bottom, and at the top of dialog body, when it is scrolled to the middle', () => {
      cy.loadStory('dialog-long-content');
      cy.findByText('Open').click();
      cy.findByTestId('dialog-body').scrollTo(0, 100);
      cy.findByRole('dialog').should('exist');
    });

    it('subtle shadow is shown at the top of dialog body, when it is scrolled to the bottom', () => {
      cy.loadStory('dialog-long-content');
      cy.findByText('Open').click();
      cy.findByTestId('dialog-body').scrollTo('bottom');
      cy.findByRole('dialog').should('exist');
    });
  });

  it('after clicking on the Close button, it disappears', () => {
    cy.loadStory('dialog-basic');
    cy.findByText('Open').click();
    cy.wait(500);
    cy.findByRole('dialog').findByLabelText('Close').click();
    cy.findByTestId('dialog-overlay').should('not.exist');
  });

  it('after clicking on the overlay, it disappears', () => {
    cy.loadStory('dialog-basic');
    cy.findByText('Open').click();
    cy.wait(500);
    cy.findByTestId('dialog-overlay').click({ force: true });
    cy.findByRole('dialog').should('not.exist');
    cy.findByTestId('dialog-overlay').should('not.exist');
  });

  it('after opening it via keyboard, one of the predefined buttons in the footer is focused', () => {
    cy.loadStory('dialog-basic');
    cy.findByText('Open').type('{enter}');
    cy.findByText('Confirm').should('exist');
  });
});

export {};
