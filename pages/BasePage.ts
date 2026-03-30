import { Page, expect } from "playwright/test";
export { expect, Page, Locator } from "playwright/test";

function printSomething(variable: string) {
    console.log('Testing ""');
}

export class BasePage {
    protected readonly page: Page;

    protected constructor(page: Page) {
        this.page = page;
    }

    public async verifyPageUrl(expectedUrlPattern: RegExp) {
        printSomething('Verifying page URL');
        await expect(this.page).toHaveURL(expectedUrlPattern);
    }

    public async verifyPageTitle(expectedTitle: string) {
        printSomething('Verifying page title');
        await expect(this.page).toHaveTitle(expectedTitle);
    }
}
