/// <reference types="cypress" />
import HomePage from '../support/pageObjects/homePage';
import ProductsPage from '../support/pageObjects/productsPage';
import RecipesPage from '../support/pageObjects/recipesPage';
import AboutUsPage from '../support/pageObjects/aboutUsPage';
import BrandsPage from '../support/pageObjects/BrandsPage';
import WhereToBuyPage from '../support/pageObjects/WhereToBuyPage';

describe('Navigation tests', () => {
  beforeEach(() => {
    cy.viewport(1280, 1000);
  });

  it('Find broken links in Home Page', () => {
    HomePage.visit().findBrokenLinks();
  });

  it.skip('Find missing images in Home Page', () => {
    HomePage.visit().findMissingImages();
  });

  it('Find broken links in Products Page', () => {
    ProductsPage.visit().findBrokenLinks();
  });

  it('Find broken links in Recipes Page', () => {
    RecipesPage.visit().findBrokenLinks();
  });

  it('Find broken links in About Us', () => {
    AboutUsPage.visit().findBrokenLinks();
  });

  it('Find broken links in Brands', () => {
    BrandsPage.visit().findBrokenLinks();
  });

  it('Find broken links in Where To Buy', () => {
    cy.window().then(win => {
      cy.stub(win.navigator.geolocation, 'getCurrentPosition').callsFake((callback) => {
        return callback({
          coords: {
            latitude: 40.7128, // New York latitude
            longitude: -74.0060, // New York longitude
          },
        });
      });
    });
    WhereToBuyPage.visit().findBrokenLinks();
  });
});