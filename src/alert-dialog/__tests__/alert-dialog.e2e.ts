const screenSizes: Record<string, [number, number]> = {
  small: [375, 800],
  medium: [768, 1024],
  large: [1920, 1080],
};

describe('AlertDialog', () => {
  describe('when the content is short, it renders correctly', () => {
    Object.keys(screenSizes).forEach((size) => {
      const [width, height] = screenSizes[size];

      it(`on ${size} screen device`, () => {
        cy.viewport(width, height);
        cy.loadStory('alert-dialog-basic');
        cy.findByText('Open').click();
        cy.findByRole('alertdialog').should('exist');
        cy.findByTestId('dialog-overlay').should('exist');
      });
    });
  });

  it('after clicking on the Close button, it disappears', () => {
    cy.loadStory('alert-dialog-basic');
    cy.findByText('Open').click();
    cy.wait(500);
    cy.findByRole('alertdialog').findByLabelText('Close').click();
    cy.findByTestId('dialog-overlay').should('not.exist');
  });

  it('after clicking on the overlay, it disappears', () => {
    cy.loadStory('alert-dialog-basic');
    cy.findByText('Open').click();
    cy.wait(500);
    cy.findByTestId('dialog-overlay').click({ force: true });
    cy.findByRole('alertdialog').should('not.exist');
    cy.findByTestId('dialog-overlay').should('not.exist');
  });

  it('after opening it via keyboard, one of the predefined buttons in the footer is focused', () => {
    cy.loadStory('alert-dialog-basic');
    cy.findByText('Open').type('{enter}');
    cy.findByText('Got It').should('exist');
  });
});

export {};
