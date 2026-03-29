import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../pages/HomePage';
import RetirementPage from '../pages/RetirementPage';
import ContactPage from '../pages/ContactPage';

const homePage = new HomePage();
const retirementPage = new RetirementPage();
const contactPage = new ContactPage();

Given('the user visits the homepage', () => {
    cy.visit('/');
    homePage.navigateToRetirementAndWealth();
});

When(
    "he navigates through the site and copy the third card's text that should include {string}",
    (expectedText) => {
        retirementPage.goToCardAndCopyText(expectedText);
        retirementPage.goToLetsGetStartedButton();
    },
);

Then('the site is loaded successfully', () => {
    const urlFragment = '/contact';
    contactPage.verifyContactPageLoaded(urlFragment);
});
