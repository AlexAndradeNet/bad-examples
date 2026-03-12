import { Locator, Page } from "playwright/types/test";

export class RetirementWealthPage {
    private readonly page: Page;
    private readonly poweringInnovationRetirementServicesHeader: Locator;
    private readonly aiMachineLearningFlipCard: Locator;
    private readonly aiMachineLearningFlipCardMessages: Locator;
    private readonly letsGetStartedButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.poweringInnovationRetirementServicesHeader = this.page.locator(
            "//h2[@class='h2 heading section-title  scroll-animation  fade ']",
        );
        this.aiMachineLearningFlipCard = this.page.locator(
            "//div[@class='flip-card-front card-front']//div[@class='card-text' and contains(.,'Machine learning')]",
        );
        this.aiMachineLearningFlipCardMessages = this.page.locator(
            "//div[contains(@class,'flip-card') and .//div[contains(@class,'card-front')]//div[contains(.,'AI &') and contains(.,'Machine learning')]]//div[@class='card-text small']",
        );
        this.letsGetStartedButton = this.page.locator(
            '//a[@title="Let\'s get started"]',
        );
    }

    public async mouseHoverToAiMachineLearningFlipCard() {
        await this.aiMachineLearningFlipCard.hover();
    }

    public async getAiMachineLearningFlipCardMessage() {
        return await this.aiMachineLearningFlipCardMessages.innerText();
    }

    public async clickLetsGetStartedButton() {
        await this.letsGetStartedButton.click();
    }

    public async scrollToPoweringInnovationRetirementServices() {
        await this.poweringInnovationRetirementServicesHeader.scrollIntoViewIfNeeded();
    }

    public async printAiMachineLearningFlipCardMessage() {
        console.log(await this.getAiMachineLearningFlipCardMessage());
    }

    public async scrollToBottom() {
        await this.page.evaluate(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
    }
}
