const _elements = {
    industriesOption: () => cy.contains('#menu-main-menu', 'Industries'),
    retirementAndWealthOption: () => cy.contains('.industry-item', 'Retirement and wealth'),
};

export default class HomePage {
    navigateToRetirementAndWealth() {
        _elements.industriesOption().realHover();
        _elements.retirementAndWealthOption().click();
    }
}
