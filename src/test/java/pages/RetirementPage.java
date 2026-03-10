package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.UIUtilities;
import utilities.WebDriverUtilities;

public class RetirementPage {

    @FindBy(css = "h2[class='h2 heading section-title  scroll-animation  fade ']")
    public WebElement poweringInnovationRetirementServicesHeader;

    @FindBy(xpath = "(//div[@class='flip-card-front card-front'])[3]")
    public WebElement powerAndInnovationThirdCard;

    @FindBy(xpath = "(//div[@class='card-text small'])[3]")
    public WebElement powerAndInnovationThirdCardFlipped;

    @FindBy(xpath = "//a[@title=\"Let's get started\"]")
    public WebElement letsGetStartedButton;

    public RetirementPage() {
        PageFactory.initElements(WebDriverUtilities.getDriver(), this);
    }

    public void mouseHoverToAiMachineLearningFlipCard() {
        UIUtilities.mouseHover(powerAndInnovationThirdCard);
    }

    public String getAiMachineLearningFlipCardMessages() {
        UIUtilities.waitForElementToBeVisible(powerAndInnovationThirdCardFlipped);
        return UIUtilities.getText(powerAndInnovationThirdCardFlipped);
    }

    public void clickLetsGetStartedButton() {
        UIUtilities.click(letsGetStartedButton);
    }

}
