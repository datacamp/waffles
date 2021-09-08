import 'cypress-axe';
import './commands';

afterEach(() => {
  cy.a11yCheck();
});
