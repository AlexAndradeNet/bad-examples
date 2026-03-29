export default class BasePage {

    verifyContactPageLoaded(urlFragment) {
        cy.url().should('include', urlFragment);
        cy.title().then((_pageTitle) => {
            cy.log('Page title:', _pageTitle);
            console.log('Page title:', _pageTitle);
        });
    }
}
