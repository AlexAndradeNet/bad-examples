import { test } from "../utilities/UITestUtilities";
import { ContactPage } from "../pages/ContactPage";
import { HomePage } from "../pages/HomePage";
import { RetirementWealthPage } from "../pages/RetirementWealthPage";

test("Verify contact page title and url @wip", async ({ page }) => {

    const homePage = new HomePage(page);
    await homePage.acceptCookies();
    await homePage.hoverOverIndustriesMenu();
    await homePage.clickRetirementWealthLearnMoreButton();

    const retirementWealthPage = new RetirementWealthPage(page);
    await retirementWealthPage.mouseHoverToAiMachineLearningFlipCard();

    const flipCardMessage = await retirementWealthPage.getAiMachineLearningFlipCardMessage();
    console.log(`AI & Machine learning flip card message: ${flipCardMessage}`);

    await retirementWealthPage.scrollToBottom();

    await retirementWealthPage.clickLetsGetStartedButton();

    const contactPage = new ContactPage(page);
    await contactPage.verifyContactPageUrl();
    await contactPage.verifyContactPageTitle();

});
