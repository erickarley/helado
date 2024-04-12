class LilDrumsProductsPage {
    visit() {
      cy.visit('/us/en/brands/drumstick/products/lil-drums-cones');
      cy.wait(5000);
    }
  
    verifyHeadersText() {
      cy.get('h1').should('contain.text', "SHOW A LIL' LOVE");
      cy.get('h3').should('contain.text', "Lil' Drums deliver hit after Lil' hit of deliciousness. So make a Lil' noise for big flavor.");
    }
  }
  
  export default new LilDrumsProductsPage();