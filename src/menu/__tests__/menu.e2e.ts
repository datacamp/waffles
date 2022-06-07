const placement = ['right', 'left', 'top', 'bottom'] as const;

describe('Menu', () => {
  it('render basic menu with one link menu item', () => {
    cy.loadStory('menu-basic');
    cy.get('main').findByText('Open Menu').click();
    cy.findByRole('menu').findAllByRole('menuitem').should('have.length', 4);
    cy.findByRole('menu').find('button').should('have.length', 3);
    cy.findByRole('menu').find('a').should('have.length', 1);
  });

  it('when menu is open, clicking the trigger closes it', () => {
    cy.loadStory('menu-basic');
    cy.get('main').findByText('Open Menu').click();
    cy.findByRole('menu').should('exist');
    cy.get('main').findByText('Open Menu').click();
    cy.findByRole('menu').should('not.exist');
  });

  it('when menu is open, clicking the menu item closes it', () => {
    cy.loadStory('menu-basic');
    cy.get('main').findByText('Open Menu').click();
    cy.findByRole('menu').should('exist');
    cy.findByText('Edit').click();
    cy.findByRole('menu').should('not.exist');
  });

  it('render proper focus state of a menu item', () => {
    cy.loadStory('menu-basic');
    cy.get('main').find('button').focus();
    cy.get('body').type('{downarrow}{downarrow}');
    cy.findByRole('menu').should('exist');
  });

  it('when navigating with arrow keys, disabled items are skipped', () => {
    cy.loadStory('menu-advanced');
    cy.get('main').find('button').focus();
    cy.get('body').type(
      '{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}',
    );
    cy.findByText('Remove').closest('button').should('have.focus');
  });

  it('when navigating with arrow keys, if the boundary of the list is reached restart from beginning', () => {
    cy.loadStory('menu-advanced');
    cy.get('main').find('button').focus();
    cy.get('body').type(
      '{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}',
    );
    cy.findByText('Editor').closest('button').should('have.focus');
  });

  it('render advanced menu with all features enabled', () => {
    cy.loadStory('menu-advanced');
    cy.get('main').findByText('Open Menu').click();
    cy.findByRole('menu').should('exist');
  });

  it('render inverted menu', () => {
    cy.loadStory('menu-inverted');
    cy.get('main').findByText('Open Menu').click();
    cy.findByRole('menu').should('exist');
  });

  describe('render menu to the', () => {
    placement.forEach((placement) => {
      it(`${placement} of the trigger`, () => {
        cy.loadStory('menu-placement');
        cy.findByText(`${placement}`).click();
        cy.findByText('Open Menu').click();
        cy.findByRole('menu').should('exist');
      });
    });
  });
});
