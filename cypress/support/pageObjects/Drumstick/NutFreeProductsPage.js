class NutFreeProductsPage {
    visit() {
      cy.visit('/us/en/brands/drumstick/products/nut-free-cones');
      cy.wait(5000);
    }
  
    verifyHeadersText() {
      // cy.get('h1').should('contain.text', "JUST SUNDAE, WITHOUT NUTS");
      cy.get('h3').should('contain.text', "Imagine a Drumstick Sundae Cone without peanuts. Now open your eyes. Ta-da.");
    }
  }
  
  export default new NutFreeProductsPage();