class MiniDrumsProductsPage {
    visit() {
      cy.visit('/us/en/brands/drumstick/products/mini-drums-cones');
      cy.wait(5000);
    }
  
    verifyHeadersText() {
      cy.get('h1').should('contain.text', "TAKE A MINI MOMENT");
      cy.get('h3').should('contain.text', "You always deserve a mini treat. A mini break. A mini snack. A mini bite. So let's give mini its moment.");
    }
  }
  
  export default new MiniDrumsProductsPage();