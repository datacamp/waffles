/// <reference types="cypress" />
/// <reference types="cypress-axe" />
/// <reference types="@testing-library/cypress" />

declare namespace Cypress {
  interface Chainable {
    a11yCheck(): Chainable;
    loadStory(storyName: string): Chainable;
  }
}
