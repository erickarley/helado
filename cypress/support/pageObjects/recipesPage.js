import CommonHelpers from './commonHelpers';

class RecipesPage {
  visit() {
    CommonHelpers.disableUncaughtExceptionHandling(); // Disable before cy.visit
    cy.visit('/us/en/recipes');
    cy.wait(10000);
    CommonHelpers.enableUncaughtExceptionHandling(); // Enable after cy.visit
    return this;
  }

  findBrokenLinks() {
    CommonHelpers.findBrokenLinks();
  }
}

export default new RecipesPage();