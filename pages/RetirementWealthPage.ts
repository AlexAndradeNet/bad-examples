import { Locator, Page } from "playwright/types/test";

export class RetirementWealthPage {
    private readonly page: Page;
    private readonly poweringInnovationRetirementServicesHeader: Locator;
    private readonly thirdCard: Locator;
    private readonly letsGetStartedButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.poweringInnovationRetirementServicesHeader = this.page.locator(
            "h2.section-title",
        );
        this.thirdCard = this.page.locator('.flip-card-inner')
                                                .getByText('AI & Machine learning');
        this.letsGetStartedButton = this.page.getByRole('link', { name: "Let's get started" });
    }

    public async mouseHoverToThirdCard() {
        await this.thirdCard.hover();
    }

    public async getThirdCardFlippedMessage() {
        return await this.thirdCard.innerText();
    }

    public async clickLetsGetStartedButton() {
        await this.letsGetStartedButton.click();
    }

    public async scrollToPoweringInnovationRetirementServices() {
        await this.poweringInnovationRetirementServicesHeader.scrollIntoViewIfNeeded();
    }

    public async printThirdCardFlippedMessage() {
        console.log(await this.getThirdCardFlippedMessage());
    }

    public async scrollToBottom() {
        await this.page.evaluate(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
    }
}
