package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class RetirementPage extends BasePage {

    @FindBy(css = "h2[class='h2 heading section-title  scroll-animation  fade ']")
    public WebElement poweringInnovationRetirementServicesHeader;

    @FindBy(xpath = "(//div[@class='flip-card-front card-front'])[3]")
    public WebElement powerAndInnovationThirdCard;

    @FindBy(xpath = "(//div[@class='card-text small'])[3]")
    public WebElement powerAndInnovationThirdCardFlipped;

    @FindBy(xpath = "//a[@title=\"Let's get started\"]")
    public WebElement letsGetStartedButton;

    public void mouseHoverToAiMachineLearningFlipCard() {
        mouseHover(powerAndInnovationThirdCard);
    }

    public String getAiMachineLearningFlipCardMessages() {
        waitForElementToBeVisible(powerAndInnovationThirdCardFlipped);
        return getText(powerAndInnovationThirdCardFlipped);
    }

    public void clickLetsGetStartedButton() {
        click(letsGetStartedButton);
    }

}
