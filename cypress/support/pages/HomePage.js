const elements = {
    industriesOption: () => cy.contains('ul#menu-main-menu li a', 'Industries'),
    retirementAndWealthOption: () => cy.contains('a.industry-item', 'Retirement and wealth'),
    poweringInnovationSection: () => cy.contains('h2', 'Powering innovation in retirement services'),
    AIAndMLCard: () => cy.contains('.card-wrapper', 'AI & Machine learning'),
    titleSection: '.card-text.small',
    letsGetStartedButton: () => cy.contains("a", "Let's get started"),
}

export default class HomePage {

    navigateToRetirementAndWealth() {
        elements.industriesOption().realHover();
        elements.retirementAndWealthOption().should('be.visible').click();
        elements.poweringInnovationSection()
            .scrollIntoView()
            .should('be.visible');
    }

}
