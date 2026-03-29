import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../pages/HomePage';
import RetirementPage from '../pages/RetirementPage';
import ContactPage from '../pages/ContactPage';

const _homePage = new HomePage();
const _retirementPage = new RetirementPage();
const _contactPage = new ContactPage();

Given('the user visits the homepage', () => {
    cy.visit('/');
    _homePage.navigateToRetirementAndWealth();
});

When(
    "he navigates through the site and copy the third card's text that should include {string}",
    (expectedText) => {
        _retirementPage.goToCardAndCopyText(expectedText);
        _retirementPage.goToLetsGetStartedButton();
    },
);

Then('the site is loaded successfully', () => {
    const _urlFragment = '/contact';
    _contactPage.verifyContactPageLoaded(_urlFragment);
});
