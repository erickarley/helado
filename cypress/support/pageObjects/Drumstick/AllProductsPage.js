import CommonHelpers from '../commonHelpers';

class AllProductsPage {
    visit() {
      CommonHelpers.disableUncaughtExceptionHandling(); // Disable before cy.visit
      cy.visit('/us/en/brands/drumstick/products/all');
      cy.wait(5000);
      CommonHelpers.enableUncaughtExceptionHandling(); // Enable after cy.visit
    }
  
    verifyHeadersText() {
      cy.get('h1').should('contain.text', "DRUMSTICK SQUAD, STAND UP!");
        cy.get('h3').should('contain.text', "It's all family over here, and when we get together, we represent. We heard your freezer is free, and we're planning a reunion.");
    }
  }
  
export default new AllProductsPage();