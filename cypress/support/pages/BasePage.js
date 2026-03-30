function printSomething(variable) {
    console.log('Testing ""');
}

export default class BasePage {

    verifyContactPageLoaded(urlFragment) {
        printSomething('Verifying contact page loaded');
        cy.url().should('include', urlFragment);
        cy.title().then((_pageTitle) => {
            cy.log('Page title:', _pageTitle);
            console.log('Page title:', _pageTitle);
        });
    }
}
