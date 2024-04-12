class HomePage {
    visit() {
      cy.visit('/us/en/brands/drumstick');
      cy.wait(5000);
    }
  
    verifyHeadersText() {
      cy.get('h1').should('contain.text', "ANOTHER DAY, ANOTHER DRUMSTICK");
      // cy.get('h3').should('contain.text', "It's all family over here, and when we get together, we represent. We heard your freezer is free, and we're planning a reunion.");
    }

    verifyRealRecognizeSection() {
      cy.get('h2').should('contain.text', 'REAL RECOGNIZE REAL TASTY');
    }

    validateDrumstickMondayFeatureCard() {
      // Find the feature card containing the text '#DRUMSTICKMONDAY'
      cy.get('[role="article"][aria-label="feature-card"]')
        .contains('span.sub-head-36', '#DRUMSTICKMONDAY')
        .closest('[role="article"][aria-label="feature-card"]')
        .within(() => {
        cy.get('span.sub-head-36').should('contain.text', '#DRUMSTICKMONDAY');
        cy.get('p').eq(2).should('contain.text', 'Sign our Change.org petition to make the Monday after The Big Game a national holiday. Talk about a sweet treat.');
        cy.get('a').should('have.attr', 'href', 'https://www.change.org/p/make-the-day-after-the-big-game-a-national-holiday').and('have.attr', 'target', '_blank');
      });
    }
  
    validateTastyMemesFeatureCard() {
      // Find the feature card containing the text 'TASTY MEMES'
      cy.get('[role="article"][aria-label="feature-card"]')
          .contains('span.sub-head-36', 'TASTY MEMES')
          .closest('[role="article"][aria-label="feature-card"]')
          .within(() => {
              cy.get('span.sub-head-36').should('contain.text', 'TASTY MEMES');
              cy.get('p').eq(2).should('contain.text', "We can’t think of anything tastier for your feed than following @Drumstick on TikTok. Eat that, algorithm.");
              cy.get('a').should('have.attr', 'href', 'https://www.tiktok.com/@drumstick').and('have.attr', 'target', '_blank');
          });
    }
    
    validatePackYourBagsFeatureCard() {
      // Find the feature card containing the text 'PACK YOUR BAGS'
      cy.get('[role="article"][aria-label="feature-card"]')
          .contains('span.sub-head-36', 'PACK YOUR BAGS')
          .closest('[role="article"][aria-label="feature-card"]')
          .within(() => {
              cy.get('span.sub-head-36').should('contain.text', 'PACK YOUR BAGS');
              cy.get('p').eq(2).should('contain.text', 'Dr. Umstick is taking flight, and he seems to have packed some cone-traband. We can only hope he avoids a meltdown.');
              cy.get('a').should('have.attr', 'href', '/us/en/brands/drumstick/meet-the-dr');
          });
    }

    // validateWhatsGoodCard() {
    //   cy.get('.owl-item.active').eq(0).within(() => {
    //       cy.get('h2').should('contain.text', 'WHAT’S GOOD?');
    //       cy.contains('Meet the squad').should('be.visible');
    //       cy.get('img').should('have.attr', 'alt', 'What’s Good?')
    //           .and('have.attr', 'src', '/path/to/whatsgoodimage.jpg');
    //   });
  // }

  validateOriginalSundaeConeCard() {
    cy.get('.owl-stage-outer.owl-height').eq(1).within(() => {
      cy.get('.owl-item.active').eq(1).within(() => {
            cy.get('a').should('have.attr', 'href', '/us/en/brands/drumstick/products/classic-cones')
              .find('h4').should('contain.text', 'The Original Sundae Cone');
          // 
          cy.get('img').should('have.attr', 'alt', 'The Original Sundae Cone®')
            .and('have.attr', 'src', '/content/dam/dreyersgrandicecreaminc/us/en/drumstick/202401-refresh/drumstick-the-original-vanilla-ice-cream-8ct-448x448.webp/_jcr_content/renditions/featurecard.png');
      });
      })
  }

  validateMiniDrumsCard() {
      cy.get('.owl-stage-outer.owl-height').eq(1).within(() => {
        cy.get('.owl-item.active').eq(2).within(() => {
        cy.get('a').should('have.attr', 'href', '/us/en/brands/drumstick/products/mini-drums-cones')
          .find('h4').should('contain.text', 'Mini Drums™ Cones');
          cy.get('img').should('have.attr', 'alt', 'Mini Drums™ Cones')
              .and('have.attr', 'src', '/content/dam/dreyersgrandicecreaminc/us/en/drumstick/202401-refresh/drumstick-mini-drum-vanilla-ice-cream-448x448.webp/_jcr_content/renditions/featurecard.png');
        });
      });
  }

  validateLilDrumsCard() {
    cy.get('.owl-stage-outer.owl-height').eq(1).within(() => {
      cy.get('.owl-item').eq(3).within(() => {
      cy.get('a').should('have.attr', 'href', '/us/en/brands/drumstick/products/lil-drums-cones')
        .find('h4').should('contain.text', 'Lil\' Drums® Cones');
        cy.get('img').should('have.attr', 'alt', 'Lil\' Drums® Cones')
            .and('have.attr', 'src', '/content/dam/dreyersgrandicecreaminc/us/en/drumstick/202401-refresh/drumstick-lil%27-drum-vanilla-and-chocolate-ice-cream-448x448.webp/_jcr_content/renditions/featurecard.png');
      });
    });
  }

  validateKingSizeCard() {
    cy.get('.owl-stage-outer.owl-height').eq(1).within(() => {
      cy.get('.owl-item').eq(4).within(() => {
      cy.get('a').should('have.attr', 'href', '/us/en/brands/drumstick/products/king-size-cones')
        .find('h4').should('contain.text', 'King Size Cones');
        cy.get('img').should('have.attr', 'alt', 'King Size Cones')
            .and('have.attr', 'src', '/content/dam/dreyersgrandicecreaminc/us/en/drumstick/202401-refresh/drumstick-king-size-triple-chocolate-ice-cream-5ct-448x448.webp/_jcr_content/renditions/featurecard.png');
      });
    });
  }

  validateSimplyDippedCard() {
    cy.get('.owl-stage-outer.owl-height').eq(1).within(() => {
      cy.get('.owl-item').eq(5).within(() => {
      cy.get('a').should('have.attr', 'href', '/us/en/brands/drumstick/products/simply-dipped-cones')
        .find('h4').should('contain.text', 'Simply Dipped™ Cones');
        cy.get('img').should('have.attr', 'alt', 'Simply Dipped™ Cones')
            .and('have.attr', 'src', '/content/dam/dreyersgrandicecreaminc/us/en/drumstick/202401-refresh/drumstick-simpy-dipped-ice-cream-8ct-448x448.webp/_jcr_content/renditions/featurecard.png');
      });
    });
  }

  validateSuperNuggetCard() {
    cy.get('.owl-stage-outer.owl-height').eq(1).within(() => {
      cy.get('.owl-item').eq(6).within(() => {
      cy.get('a').should('have.attr', 'href', '/us/en/brands/drumstick/products/super-nugget-cones')
        .find('h4').should('contain.text', 'Super Nugget Cones');
        cy.get('img').should('have.attr', 'alt', 'Super Nugget Cones')
            .and('have.attr', 'src', '/content/dam/dreyersgrandicecreaminc/us/en/drumstick/202401-refresh/drumstick-super-nugget-ice-cream-8ct-448x448.webp/_jcr_content/renditions/featurecard.png');
      });
    });
  }

  validateFunDippedCard() {
    cy.get('.owl-stage-outer.owl-height').eq(1).within(() => {
      cy.get('.owl-item').eq(7).within(() => {
      cy.get('a').should('have.attr', 'href', '/us/en/brands/drumstick/products/fun-dipped-cones')
        .find('h4').should('contain.text', 'Fun Dipped Cones');
        cy.get('img').should('have.attr', 'alt', 'Fun Dipped Cones')
            .and('have.attr', 'src', '/content/dam/dreyersgrandicecreaminc/us/en/drumstick/202401-refresh/drumstick-crunch-dipped-ice-cream-8ct-448x448.webp/_jcr_content/renditions/featurecard.png');
      });
    });
  }

//   validateKingSizeConesCard() {
//       cy.get('.owl-item').eq(4).within(() => {
//           cy.get('h4').should('contain.text', 'King Size Cones');
//           cy.get('a').should('have.attr', 'href', '/us/en/brands/drumstick/products/king-size-cones');
//           cy.get('img').should('have.attr', 'alt', 'King Size Cones')
//               .and('have.attr', 'src', '/path/to/kingsizeconesimage.jpg');
//       });
//   }

//   validateSimplyDippedConesCard() {
//       cy.get('.owl-item').eq(5).within(() => {
//           cy.get('h4').should('contain.text', 'Simply Dipped™ Cones');
//           cy.get('a').should('have.attr', 'href', '/us/en/brands/drumstick/products/simply-dipped-cones');
//           cy.get('img').should('have.attr', 'alt', 'Simply Dipped™ Cones')
//               .and('have.attr', 'src', '/path/to/simplydippedconesimage.jpg');
//       });
//   }

//   validateSuperNuggetConesCard() {
//       cy.get('.owl-item').eq(6).within(() => {
//           cy.get('h4').should('contain.text', 'Super Nugget Cones');
//           cy.get('a').should('have.attr', 'href', '/us/en/brands/drumstick/products/super-nugget-cones');
//           cy.get('img').should('have.attr', 'alt', 'Super Nugget Cones')
//               .and('have.attr', 'src', '/path/to/supernuggetconesimage.jpg');
//       });
//   }

//   validateFunDippedConesCard() {
//       cy.get('.owl-item').eq(7).within(() => {
//           cy.get('h4').should('contain.text', 'Fun Dipped Cones');
//           cy.get('a').should('have.attr', 'href', '/us/en/brands/drumstick/products/fun-dipped-cones');
//           cy.get('img').should('have.attr', 'alt', 'Fun Dipped Cones')
//               .and('have.attr', 'src', '/path/to/fundippedconesimage.jpg');
//       });
//   }

//   validateWhatsGoodCard() {
//     cy.get('.owl-item.active').eq(0).within(() => {
//         cy.get('h2').should('contain.text', 'WHAT’S GOOD?');
//         cy.contains('Meet the squad').should('be.visible');
//     });
// }

// validateOriginalSundaeConeCard() {
//     cy.get('.owl-item.active').eq(1).within(() => {
//         cy.get('h4').should('contain.text', 'The Original Sundae Cone®');
//         cy.get('a').should('have.attr', 'href', '/us/en/brands/drumstick/products/classic-cones');
//         cy.get('img').should('have.attr', 'alt', 'The Original Sundae Cone®');
//     });
// }

// validateMiniDrumsCard() {
//     cy.get('.owl-item.active').eq(2).within(() => {
//         cy.get('h4').should('contain.text', 'Mini Drums™ Cones');
//         cy.get('a').should('have.attr', 'href', '/us/en/brands/drumstick/products/mini-drums-cones');
//         cy.get('img').should('have.attr', 'alt', 'Mini Drums™ Cones');
//     });
// }

// validateLilDrumsCard() {
//     cy.get('.owl-item.active').eq(3).within(() => {
//         cy.get('h4').should('contain.text', 'Lil\' Drums® Cones');
//         cy.get('a').should('have.attr', 'href', '/us/en/brands/drumstick/products/lil-drums-cones');
//         cy.get('img').should('have.attr', 'alt', 'Lil\' Drums® Cones');
//     });
// }

// validateKingSizeConesCard() {
//     cy.get('.owl-item.active').eq(4).within(() => {
//         cy.get('h4').should('contain.text', 'King Size Cones');
//         cy.get('a').should('have.attr', 'href', '/us/en/brands/drumstick/products/king-size-cones');
//         cy.get('img').should('have.attr', 'alt', 'King Size Cones');
//     });
// }

// validateSimplyDippedConesCard() {
//     cy.get('.owl-item.active').eq(5).within(() => {
//         cy.get('h4').should('contain.text', 'Simply Dipped™ Cones');
//         cy.get('a').should('have.attr', 'href', '/us/en/brands/drumstick/products/simply-dipped-cones');
//         cy.get('img').should('have.attr', 'alt', 'Simply Dipped™ Cones');
//     });
// }

// validateSuperNuggetConesCard() {
//     cy.get('.owl-item.active').eq(6).within(() => {
//         cy.get('h4').should('contain.text', 'Super Nugget Cones');
//         cy.get('a').should('have.attr', 'href', '/us/en/brands/drumstick/products/super-nugget-cones');
//         cy.get('img').should('have.attr', 'alt', 'Super Nugget Cones');
//     });
// }

// validateFunDippedConesCard() {
//     cy.get('.owl-item.active').eq(7).within(() => {
//         cy.get('h4').should('contain.text', 'Fun Dipped Cones');
//         cy.get('a').should('have.attr', 'href', '/us/en/brands/drumstick/products/fun-dipped-cones');
//         cy.get('img').should('have.attr', 'alt', 'Fun Dipped Cones');
//     });
// }


  }
  
  export default new HomePage();