import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, Page } from "playwright";

let page: Page;

Given('I navigate to {string}', async (url: string) => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto(url);
});

Given('I accept the policy', async () => {
  const acceptButton = page.locator('text=Accept');
  if (await acceptButton.isVisible()) {
    await acceptButton.click();
  }
});

When('I go to the {string} and open {string}', async (menu: string, submenu: string) => {
  const menuLocator = page.locator(`nav >> text=${menu}`).first();
  await menuLocator.waitFor({ state: 'visible', timeout: 15000 });
  await menuLocator.hover();
  await page.waitForTimeout(1500);

  const submenuLocator = page.locator(`nav >> text=${submenu}`).first();
  await submenuLocator.waitFor({ state: 'visible', timeout: 15000 });
  await submenuLocator.click();

  await page.waitForLoadState('networkidle');
});

When('I scroll to {string}', async (sectionTitle: string) => {
  await page.locator(`text=${sectionTitle}`).scrollIntoViewIfNeeded();
});

When(
  'I hover and copy text from the third tile under {string}',
  { timeout: 60000 },
  async (tileSection: string) => {
    await page.locator(`:has-text("${tileSection}")`).first().waitFor({ state: 'visible', timeout: 20000 });

    const tiles = page.locator(`:has-text("${tileSection}")`)
      .locator('..')
      .locator('.tile, .card, [class*="tile"], [class*="card"]');

    const count = await tiles.count();
    console.log(`Found ${count} tiles under section "${tileSection}"`);

    const sectionHtml = await page.locator(`:has-text("${tileSection}")`).first().evaluate(el => el.outerHTML);
    console.log('Section HTML:', sectionHtml);

    if (count < 3) {
      throw new Error(`Less than 3 tiles found in section: "${tileSection}". Found ${count} tiles.`);
    }

    await tiles.nth(2).waitFor({ state: 'visible', timeout: 20000 });
    await tiles.nth(2).hover();

    const tileText = await tiles.nth(2).textContent();
    if (!tileText) throw new Error("Third tile has no text content");

    console.log("Third tile text:", tileText.trim());
  }
);

When('I scroll to the bottom and click on {string}', async (buttonText: string) => {
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.click(`text=${buttonText}`);
});

Then('I should verify the URL and title', async () => {
  const currentUrl = page.url();
  const title = await page.title();
  console.log("URL:", currentUrl);
  console.log("Title:", title);
});

Then('I should print the title text', async () => {
  const titleText = await page.title();
  console.log("Title text:", titleText);
});
