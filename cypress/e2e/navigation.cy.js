/// <reference types="cypress" />

// Cypress.on('uncaught:exception', (err, runnable) => {
//   // Allow the test to continue
//   return false;
// });

describe('Navigation tests', () => {
  
  beforeEach(() => {
    cy.viewport(1280, 1000)
    cy.openHomePage()
    cy.wait(1000)
  })
    
  it('Find broken links in Home Page', () => {
    // cy.visit('/')
    cy.get('a').each(link => {
    if (link.prop('href'))
      cy.request({
      url: link.prop('href'),
      failOnStatusCode: false
      })
      cy.log( link.prop('href'))
    })
  })

  it('Find broken links in Products Page', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // Allow the test to continue
      return false;
    });
    cy.visit('/us/en/experience-ice-cream/our-products')
    cy.wait(10000)
    Cypress.on('uncaught:exception', (err, runnable) => {
      // Allow the test to continue
      return true;
    })
    cy.get('a').each(link => {
    if (link.prop('href'))
      cy.request({
      url: link.prop('href'),
      failOnStatusCode: false
      })
      cy.log( link.prop('href'))
    })
  })

  it('Find broken links in Recipes Page', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // Allow the test to continue
      return false;
    });
    cy.visit('/us/en/recipes')
    cy.wait(10000)
    Cypress.on('uncaught:exception', (err, runnable) => {
      // Allow the test to continue
      return true;
    })
    cy.get('a').each(link => {
    if (link.prop('href'))
      cy.request({
      url: link.prop('href'),
      failOnStatusCode: false
      })
      cy.log( link.prop('href'))
    })
  })

  it('Find broken links in About Us', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // Allow the test to continue
      return false;
    });
    cy.visit('/us/en/experience-ice-cream')
    cy.wait(10000)
    Cypress.on('uncaught:exception', (err, runnable) => {
      // Allow the test to continue
      return true;
    })
    cy.get('a').each(link => {
    if (link.prop('href'))
      cy.request({
      url: link.prop('href'),
      failOnStatusCode: false
      })
      cy.log( link.prop('href'))
    })
  })

})