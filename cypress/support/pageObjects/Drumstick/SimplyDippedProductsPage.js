class SimplyDippedProductsPage {
    visit() {
      cy.visit('/us/en/brands/drumstick/products/simply-dipped-cones');
      cy.wait(5000);
    }
  
    verifyHeadersText() {
      cy.get('h1').should('contain.text', "SIMPLY THE BEST");
      cy.get('h3').should('contain.text', "Creamy vanilla dipped in rich chocolatey sweetness. That's all. Enough said.");
    }
  }
  
  export default new SimplyDippedProductsPage();