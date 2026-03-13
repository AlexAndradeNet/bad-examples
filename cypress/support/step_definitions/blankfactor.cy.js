import {Given, Then, When} from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pages/HomePage";
import RetirementPage from "../pages/industries/RetirementPage";

const homePage = new HomePage();
const retirementPage = new RetirementPage();

Given('the user visits the homepage', () => {
    cy.visit('/');
    homePage.navigateToRetirementAndWealth()

});

When('he navigates through the site and copy the text that should include {string} from the card', (expectedText) => {
    retirementPage.goToCardAndCopyText(expectedText)
    retirementPage.goToLetsGetStartedButton()
});

Then('the site is loaded successfully', () => {
    const urlFragment = '/contact';
    retirementPage.verifyContactPageLoaded(urlFragment);
})