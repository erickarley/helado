import CommonHelpers from './commonHelpers';

class BrandsPage {
  visit() {
    // CommonHelpers.disableUncaughtExceptionHandling(); // Disable before cy.visit
    cy.visit('/us/en/brands');
    cy.wait(10000);
    // CommonHelpers.enableUncaughtExceptionHandling(); // Enable after cy.visit
    return this;
  }

  findBrokenLinks() {
    CommonHelpers.findBrokenLinks();
  }
}

export default new BrandsPage();