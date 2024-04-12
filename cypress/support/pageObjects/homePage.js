import CommonHelpers from './commonHelpers';

class HomePage {
  visit() {
    CommonHelpers.disableUncaughtExceptionHandling(); // Disable before cy.visit
    cy.visit('/');
    cy.wait(10000);
    CommonHelpers.enableUncaughtExceptionHandling(); // Enable after cy.visit
    return this;
  }

  findBrokenLinks() {
    CommonHelpers.findBrokenLinks();
  }

  findMissingImages() {
    CommonHelpers.findMissingImages();
  }
}

export default new HomePage();