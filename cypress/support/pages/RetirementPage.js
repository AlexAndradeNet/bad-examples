import BasePage from './BasePage';

const _elements = {
    poweringInnovationSection: () => cy.get('h2.section-title'),
    thirdCard: () => cy.contains('.flip-card-inner', 'AI & Machine learning'),
    letsGetStartedButton: () => cy.contains('a', "Let's get started"),
};

export default class RetirementPage extends BasePage {
    goToCardAndCopyText(expectedText) {
        _elements.poweringInnovationSection().scrollIntoView();
        // Trigger the lazy loading of the cards

        _elements
            .thirdCard()
            .realHover()
            .invoke('text')
            .then((text) => {
                expect(text).to.include(expectedText);
                console.log('Copied text:', text);
            });
    }

    goToLetsGetStartedButton() {
        _elements.letsGetStartedButton().scrollIntoView().click();
    }
}
