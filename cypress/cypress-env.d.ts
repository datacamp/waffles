/// <reference types="cypress" />
/// <reference types="cypress-axe" />

declare namespace Cypress {
  interface Chainable {
    a11yCheck(): Chainable;
    loadStory(storyName: string): Chainable;
  }
}
