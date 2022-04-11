// Behavior on the large screen devices is different
// SideNavigation is alwyas visible there, no need to test open / close cases
const screenSizes: Record<string, [number, number]> = {
  small: [375, 800],
  medium: [768, 1024],
};

describe('SideNavigation', () => {
  it('renders proper focus state of menu item', () => {
    cy.loadStory('side-navigation-basic');
    cy.findByText('Side Navigation').parent('a').focus();
  });

  it('is always opened on large screen device', () => {
    cy.viewport(1920, 1080);
    cy.loadStory('side-navigation-basic');
    cy.get('nav').should('exist');
    cy.findByTestId('side-navigation-menu-overlay').should('not.exist');
  });

  describe('is closed by default', () => {
    Object.keys(screenSizes).forEach((size) => {
      const [width, height] = screenSizes[size];

      it(`on ${size} screen device`, () => {
        cy.viewport(width, height);
        cy.loadStory('side-navigation-basic');
        cy.get('nav').should('not.exist');
      });
    });
  });

  describe('after clicking an open trigger, it appears', () => {
    Object.keys(screenSizes).forEach((size) => {
      const [width, height] = screenSizes[size];

      it(`on ${size} screen device`, () => {
        cy.viewport(width, height);
        cy.loadStory('side-navigation-basic');
        cy.findByText('Open').click();
        cy.get('nav').should('exist');
        cy.findByTestId('side-navigation-menu-overlay').should('exist');
      });
    });
  });

  describe('after clicking a menu Close button, it disappears', () => {
    Object.keys(screenSizes).forEach((size) => {
      const [width, height] = screenSizes[size];

      it(`on ${size} screen device`, () => {
        cy.viewport(width, height);
        cy.loadStory('side-navigation-basic');
        cy.findByText('Open').click();
        cy.wait(500);
        cy.findByLabelText('Close').click();
        cy.get('nav').should('not.exist');
        cy.findByTestId('side-navigation-menu-overlay').should('not.exist');
      });
    });
  });
});

export {};
