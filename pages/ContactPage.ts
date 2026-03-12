import { expect, Page } from "playwright/test";

export class ContactPage {

    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async verifyContactPageUrl() {
        await expect(this.page).toHaveURL(/.*contact/);
    }

    public async verifyContactPageTitle() {
        await expect(this.page).toHaveTitle('Contact | Blankfactor');
    }

}