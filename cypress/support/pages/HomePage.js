const elements = {
    industriesOption: () => cy.contains('#menu-main-menu', 'Industries'),
    retirementAndWealthOption: () => cy.contains('.industry-item', 'Retirement and wealth'),
};

export default class HomePage {
    navigateToRetirementAndWealth() {
        elements.industriesOption().realHover();
        elements.retirementAndWealthOption().click();
    }
}
