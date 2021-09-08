import '@testing-library/cypress/add-commands';
import type { Result } from 'axe-core';

function terminalLog(violations: Result[]) {
  cy.task('log', `${violations.length} accessibility violation(s) detected!`);
  // Pluck specific keys to keep the table readable
  const violationData = violations.map((violation) => {
    const { id, impact, nodes } = violation;

    return {
      id,
      impact,
      nodes: nodes.length,
    };
  });

  cy.task('table', violationData);
}

Cypress.Commands.add('a11yCheck', () => {
  cy.checkA11y('main', undefined, terminalLog);
});

Cypress.Commands.add('loadStory', (storyName: string) => {
  cy.visit(`stories/${storyName}`);
  cy.injectAxe();
});
