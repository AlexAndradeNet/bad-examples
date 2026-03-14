const elements = {
    poweringInnovationSection: () => cy.get('h2.section-title'),
    thirdCard: () => cy.contains('.flip-card-inner', 'AI & Machine learning'),
    letsGetStartedButton: () => cy.contains('a', "Let's get started"),
};

export default class RetirementPage {
    goToCardAndCopyText(expectedText) {
        elements.poweringInnovationSection().scrollIntoView();
        // Trigger the lazy loading of the cards

        elements
            .thirdCard()
            .realHover()
            .invoke('text')
            .then((text) => {
                expect(text).to.include(expectedText);
                console.log('Copied text:', text);
            });
    }

    goToLetsGetStartedButton() {
        elements.letsGetStartedButton().click();
    }

    verifyContactPageLoaded(urlFragment) {
        cy.url().should('include', urlFragment);
        cy.title().then((pageTitle) => {
            cy.log('Page title:', pageTitle);
            console.log('Page title:', pageTitle);
        });
    }
}
