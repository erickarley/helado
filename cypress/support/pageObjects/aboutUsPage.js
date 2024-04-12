import CommonHelpers from './commonHelpers';

class AboutUsPage {
  visit() {
    CommonHelpers.disableUncaughtExceptionHandling(); // Disable before cy.visit
    cy.visit('/us/en/experience-ice-cream');
    cy.wait(10000);
    CommonHelpers.enableUncaughtExceptionHandling(); // Enable after cy.visit
    return this;
  }

  findBrokenLinks() {
    CommonHelpers.findBrokenLinks();
  }
}

export default new AboutUsPage();