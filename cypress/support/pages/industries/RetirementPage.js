const elements = {
    poweringInnovationSection: () => cy.contains('h2', 'Powering innovation in retirement services'),
    AIAndMLCard: () => cy.contains('.card-wrapper', 'AI & Machine learning'),
    titleSection: '.card-text.small',
    letsGetStartedButton: () => cy.contains("a", "Let's get started"),
}

export default class RetirementPage {

    goToCardAndCopyText(expectedText) {
        elements.AIAndMLCard()
            .scrollIntoView()
            .should('be.visible')
            .realHover()
            .find(elements.titleSection)
            .invoke('text').then((text) => {
                expect(text).to.include(expectedText);
                console.log('Copied text:', text);
            });
    }

    goToLetsGetStartedButton() {
        elements.letsGetStartedButton()
            .scrollIntoView()
            .should('be.visible')
            .click();
    }

    verifyContactPageLoaded(urlFragment) {
        cy.url().should('include', urlFragment);
        cy.title().then((pageTitle) => {
            cy.log('Page title:', pageTitle);
            console.log('Page title:', pageTitle);
        });
    }

}
