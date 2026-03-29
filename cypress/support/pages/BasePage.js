export default class BasePage {

    verifyContactPageLoaded(urlFragment) {
        cy.url().should('include', urlFragment);
        cy.title().then((pageTitle) => {
            cy.log('Page title:', pageTitle);
            console.log('Page title:', pageTitle);
        });
    }
}
