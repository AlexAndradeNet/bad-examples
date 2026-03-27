import { BasePage, Page, Locator } from './BasePage';

export class HomePage extends BasePage {
    private readonly industriesPageLink: Locator;
    private readonly retirementWealthLearnMoreButton: Locator;

    constructor(page: Page) {
        super(page);
        this.industriesPageLink = this.page.locator(".desktop-nav").getByRole(
            "link",
            { name: "Industries" },
        );
        this.retirementWealthLearnMoreButton = this.page.getByRole("link", { name: "Retirement and wealth" }
        );
    }

    public async acceptCookies() {
        await this.page.context().addCookies([
            {
                name: "cookie_consent_accepted",
                value: "true",
                domain: process.env.BASE_URL?.replace("https://", "").replace("http://", "") || "",
                path: "/",
            },
        ]);
    }

    public async hoverOverIndustriesMenu() {
        await this.industriesPageLink.hover();
    }

    public async clickRetirementWealthLearnMoreButton() {
        await this.retirementWealthLearnMoreButton.click();
    }
}
