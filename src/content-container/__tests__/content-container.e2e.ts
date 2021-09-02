const screenSizes: Record<string, [number, number]> = {
  small: [375, 800],
  medium: [768, 1024],
  large: [1920, 1080],
};

describe('ContentContainer', () => {
  describe('no sidebar', () => {
    Object.keys(screenSizes).forEach((size) => {
      const [width, height] = screenSizes[size];

      it(`renders correctly on ${size} screen device`, () => {
        cy.viewport(width, height);
        cy.loadStory('content-container-no-sidebar');
        cy.injectAxe();

        cy.findAllByTestId('container').should('have.length', 1);
        cy.a11yCheck();
      });
    });
  });

  describe('short content', () => {
    Object.keys(screenSizes).forEach((size) => {
      const [width, height] = screenSizes[size];

      it(`renders correctly on ${size} screen device`, () => {
        cy.viewport(width, height);
        cy.loadStory('content-container-short-content');
        cy.injectAxe();

        cy.findAllByTestId('container').should('have.length', 1);
        cy.a11yCheck();
      });
    });
  });

  describe('with a sidebar', () => {
    // Remove small size, because sidebar is hidden / rendered as an overlay on mobile devices
    delete screenSizes.small;

    Object.keys(screenSizes).forEach((size) => {
      const [width, height] = screenSizes[size];

      it(`renders correctly on ${size} screen device`, () => {
        cy.viewport(width, height);
        cy.loadStory('content-container-with-sidebar');
        cy.injectAxe();

        cy.findAllByTestId('container').should('have.length', 1);
        cy.a11yCheck();
      });
    });
  });
});
