class FunDippedProductsPage {
    visit() {
      cy.visit('us/en/brands/drumstick/products/fun-dipped-cones');
      cy.wait(5000);
    }
  
    verifyHeadersText() {
      cy.get('h1').should('contain.text', 'WELCOME TO THE PARTY');
      cy.get('h3').should('contain.text', "Get down with cookies or crush it up with flair. This is where Drumstick cones go to celebrate.");
    }
  }
  
  export default new FunDippedProductsPage();