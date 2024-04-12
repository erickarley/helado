/// <reference types="cypress" />
import AllProductsPage from '../support/pageObjects/Drumstick/AllProductsPage';
import ClassicProductsPage from '../support/pageObjects/Drumstick/ClassicProductsPage';
import FunDippedProductsPage from '../support/pageObjects/Drumstick/FunDippedProductsPage';
import KingSizeProductsPage from '../support/pageObjects/Drumstick/KingSizeProductsPage';
import LilDrumsProductsPage from '../support/pageObjects/Drumstick/LilDrumsProductsPage';
import MiniDrumsProductsPage from '../support/pageObjects/Drumstick/MiniDrumsProductsPage';
import NutFreeProductsPage from '../support/pageObjects/Drumstick/NutFreeProductsPage';
import SimplyDippedProductsPage from '../support/pageObjects/Drumstick/SimplyDippedProductsPage';
import SuperNuggetProductsPage from '../support/pageObjects/Drumstick/SuperNuggetProductsPage';
import HomePage from '../support/pageObjects/Drumstick/HomePage';

describe('Drumstick tests', () => {
  it('Landing page available', () => {
    HomePage.visit();
    HomePage.verifyRealRecognizeSection();
  }); 

  it.only('Validate Drumstick Monday Feature Card', () => {
    HomePage.visit();
    HomePage.validateDrumstickMondayFeatureCard();
  }); 

  it('should display correct text in h1 Homepage', () => {
    HomePage.visit();
    HomePage.verifyHeadersText();
    HomePage.validateTastyMemesFeatureCard();
    HomePage.validateOriginalSundaeConeCard();
    HomePage.validateMiniDrumsCard();
    HomePage.validateFunDippedCard();
    HomePage.validateKingSizeCard();
    HomePage.validateLilDrumsCard();
    HomePage.validateMiniDrumsCard();
    HomePage.validateSimplyDippedCard();
    HomePage.validateSuperNuggetCard();
  });  

  it('should display correct text in h2 and h3 for All Products page', () => {
    AllProductsPage.visit();
    AllProductsPage.verifyHeadersText();
  });

  it('should display correct text in h2 and h3 for Classic Products page', () => {
    ClassicProductsPage.visit();
    ClassicProductsPage.verifyHeadersText();
    ClassicProductsPage.validateProductsInPage();
  });

  it('should display correct text in h2 and h3 for Fun Dipped Products page', () => {
    FunDippedProductsPage.visit();
    FunDippedProductsPage.verifyHeadersText();
  });

  // Repeat the same structure for the other classes
  it('should display correct text in h2 and h3 for King Size Products page', () => {
    KingSizeProductsPage.visit();
    KingSizeProductsPage.verifyHeadersText();
  });

  it('should display correct text in h2 and h3 for Lil Drums Products page', () => {
    LilDrumsProductsPage.visit();
    LilDrumsProductsPage.verifyHeadersText();
  });

  it('should display correct text in h2 and h3 for Mini Drums Products page', () => {
    MiniDrumsProductsPage.visit();
    MiniDrumsProductsPage.verifyHeadersText();
  });

  it('should display correct text in h2 and h3 for Nut Free Products page', () => {
    NutFreeProductsPage.visit();
    NutFreeProductsPage.verifyHeadersText();
  });

  it('should display correct text in h2 and h3 for Simply Dipped Products page', () => {
    SimplyDippedProductsPage.visit();
    SimplyDippedProductsPage.verifyHeadersText();
  });

  it('should display correct text in h2 and h3 for Super Nugget Products page', () => {
    SuperNuggetProductsPage.visit();
    SuperNuggetProductsPage.verifyHeadersText();
  });
});