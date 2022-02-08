describe('SideNavigation', () => {
  it('renders proper focus state of menu item', () => {
    cy.loadStory('side-navigation-basic');
    cy.findByText('Side Navigation').parent('a').focus();
  });

  it('on large screen device, is always opened', () => {
    cy.viewport(1920, 1080);
    cy.loadStory('side-navigation-basic');
    cy.get('nav').should('exist');
    cy.findByTestId('side-navigation-menu-overlay').should('not.exist');
  });

  it('on medium screen device, is always opened', () => {
    cy.viewport(768, 1024);
    cy.loadStory('side-navigation-basic');
    cy.get('nav').should('exist');
    cy.findByTestId('side-navigation-menu-overlay').should('not.exist');
  });

  it('on small screen device, is closed', () => {
    cy.viewport(375, 800);
    cy.loadStory('side-navigation-basic');
    cy.get('nav').should('not.exist');
  });

  it('on small screen device, after clicking an open trigger, it appears', () => {
    cy.viewport(375, 800);
    cy.loadStory('side-navigation-basic');
    cy.findByText('Open').click();
    cy.get('nav').should('exist');
    cy.findByTestId('side-navigation-menu-overlay').should('exist');
  });

  it('on small screen device, after clicking a menu Close button, it disappears', () => {
    cy.viewport(375, 800);
    cy.loadStory('side-navigation-basic');
    cy.findByText('Open').click();
    cy.wait(500);
    cy.findByLabelText('Close').click();
    cy.get('nav').should('not.exist');
    cy.findByTestId('side-navigation-menu-overlay').should('not.exist');
  });
});
