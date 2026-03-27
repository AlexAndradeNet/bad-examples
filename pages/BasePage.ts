import { Page, expect } from "playwright/test";
export { expect, Page, Locator } from "playwright/test";

export class BasePage {
    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async verifyPageUrl(expectedUrlPattern: RegExp) {
        await expect(this.page).toHaveURL(expectedUrlPattern);
    }

    public async verifyPageTitle(expectedTitle: string) {
        await expect(this.page).toHaveTitle(expectedTitle);
    }
}
