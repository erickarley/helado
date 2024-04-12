import CommonHelpers from './commonHelpers';

class WhereToBuyPage {
  visit() {
    CommonHelpers.disableUncaughtExceptionHandling(); // Disable before cy.visit
    cy.visit('/us/en/where-to-buy');
    cy.wait(10000);
    CommonHelpers.enableUncaughtExceptionHandling(); // Enable after cy.visit
    return this;
  }

  findBrokenLinks() {
    CommonHelpers.findBrokenLinks();
  }
}

export default new WhereToBuyPage();