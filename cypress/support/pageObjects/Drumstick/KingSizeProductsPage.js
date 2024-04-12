class KingSizeProductsPage {
    visit() {
      cy.visit('us/en/brands/drumstick/products/king-size-cones');
      cy.wait(5000);
    }
  
    verifyHeadersText() {
      cy.get('h1').should('contain.text', "ALL HAIL THE KING");
      cy.get('h3').should('contain.text', "One look, and you'll see why it wears the crown. One bite, and you'll know it deserves it.");
    }
  }
  
  export default new KingSizeProductsPage();