class SuperNuggetProductsPage {
    visit() {
      cy.visit('/us/en/brands/drumstick/products/super-nugget-cones');
      cy.wait(5000);
    }
  
    verifyHeadersText() {
      cy.get('h1').should('contain.text', "THE EVEN BETTER BEST PART");
      cy.get('h3').should('contain.text', "There's never a right time to say goodbye. Unless it's your favorite part. The delicious chocolatey nugget. So we made it a Super Nugget. Now there's even more to love at the end.");
    }
  }
  
  export default new SuperNuggetProductsPage();