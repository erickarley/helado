import CommonHelpers from '../commonHelpers';

class ClassicProductsPage {
    visit() {
        CommonHelpers.disableUncaughtExceptionHandling(); // Disable before cy.visit
        cy.visit('us/en/brands/drumstick/products/classic-cones');
        cy.wait(5000);
        CommonHelpers.enableUncaughtExceptionHandling(); // Enable after cy.visit
    }
  
    verifyHeadersText() {
        cy.get('h1').should('contain.text', "YOU CAN'T BEAT A CLASSIC");
        cy.get('h3').should('contain.text', 'Chocolatey. Creamy. Delicious vanilla. Salty peanuts. Still undefeated after all these years.​');
    }

    validateProductsInPage() {
        const productsToCheck = [
            '',
            'Vanilla, Chocolate, & Caramel Sundae Cones Variety Pack',
            'Vanilla Sundae Cones',
            'Banana Split Sundae Cones Variety Pack',
            'Vanilla Caramel Sundae Cones',
            'Vanilla Fudge Sundae Cones',
            'Vanilla, Fudge, & Caramel Sundae Cones Variety Pack',
            'Chocolate Sundae Cones'
        ];
    
        cy.get('#cardlist-anchor-point .list__card-item .feature-card .title').each(($title, index) => {
            cy.wrap($title).invoke('text').then((text) => {
                const productTitle = text.trim();
                // Check if the current product title matches any of the titles in the productsToCheck array
                const isProductValid = productsToCheck.some((expectedTitle) => productTitle === expectedTitle);
                // Log the product title and its validity
                Cypress.log({
                    name: 'Product Validation',
                    displayName: `Product ${index + 1}`,
                    message: `Title: '${productTitle}' | Valid: ${isProductValid}`,
                    consoleProps: () => {
                        return {
                            'Product Title': productTitle,
                            'Expected Title': productsToCheck[index],
                            'Valid': isProductValid
                        };
                    }
                });
                // Assert that the current product title is one of the expected titles
                expect(isProductValid).to.be.true;
            });
        });
    }
}

export default new ClassicProductsPage();