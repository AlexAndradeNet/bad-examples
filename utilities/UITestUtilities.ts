import { test as base_test, } from "@playwright/test";

//Extends the base test with custom UI setup.
const test = base_test.extend({
    page: async ({ page }, use: Function) => {

        switch (process.env.ENVIRONMENT as string) { // navigates to url
            case "STG":
                process.env.BASE_URL = process.env.STG;
                await page.goto(`${process.env.STG}`);
                break;

            case "DEV":
                process.env.BASE_URL = process.env.DEV;
                await page.goto(`${process.env.DEV}`);
                break;

            case "UAT":
                process.env.BASE_URL = process.env.UAT;
                await page.goto(`${process.env.UAT}`);
                break;

            case "TEST":
            default:
                process.env.BASE_URL = process.env.TEST;
                await page.goto(`${process.env.TEST}`);
        }

        await page.waitForLoadState("networkidle");

        await use(page);
    },
});

export { test };
