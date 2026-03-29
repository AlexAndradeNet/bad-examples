package stepDefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import pages.ContactPage;
import pages.LandingPage;
import pages.RetirementPage;

public class BlankFactorAssessmentSteps {

    private final LandingPage landingPage = new LandingPage();
    private final RetirementPage retirementPage = new RetirementPage();
    private final ContactPage contactPage = new ContactPage();

    @Given("I navigated to the Blank factor page and accepts the cookie policy")
    public void i_navigated_to_the_blank_factor_homepage_and_accepts_the_cookie_policy() {
        landingPage.manageCookies("cookie_consent_accepted", "true", "blankfactor.com");
    }

    @When("I open the Retirement and Wealth section")
    public void i_navigate_to_industries_section() {
        landingPage.navigateToRetirementAndWealthMenu();
    }

    @When("I scroll to Powering Innovation in Retirement Services section")
    public void i_scroll_to_powering_innovation_in_retirement_services_section() {
        retirementPage.scrollToElement(retirementPage.poweringInnovationRetirementServicesHeader);
    }

    @When("I mouse hover over the third tile AI & Machine learning and copies the text")
    public void i_mouse_hover_over_the_third_tile_ai_machine_learning_and_copies_the_text() {
        retirementPage.mouseHoverToAiMachineLearningFlipCard();
        String actualText = retirementPage.getAiMachineLearningFlipCardMessages();
        String expectedText = "Automate your operations and get to market quickly and securely. Leverage predictive data analytics using machine learning to build reliable, yet forward-thinking financial solutions.";
        Assert.assertEquals(expectedText, actualText);
    }

    @When("I scroll to the bottom of the page")
    public void i_scroll_to_the_bottom_of_the_page() {
        retirementPage.scrollToBottom();
    }

    @When("I click on the Let's get started button")
    public void i_click_on_the_let_s_get_started_button() {
        retirementPage.clickLetsGetStartedButton();
    }

    @Then("the page title should be {string}")
    public void the_page_title_should_be(String expectedTitle) {
        String actualTitle = contactPage.getPageTitle();
        Assert.assertEquals(expectedTitle, actualTitle);
        System.out.println(actualTitle);
    }

    @Then("the page URL should contain {string}")
    public void the_page_url_should_contain(String string) {
        String url = contactPage.getCurrentUrl();
        Assert.assertTrue(url.contains(string));
    }

}
