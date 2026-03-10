package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.UIUtilities;
import utilities.WebDriverUtilities;

public class LandingPage {

    @FindBy(xpath = "(//span[text()='Industries'])[2]")
    public WebElement industriesBootStrapLink;

    @FindBy(xpath = "//h6[normalize-space(text())='Retirement and wealth']")
    public WebElement retirementAndWealthMenu;

    public LandingPage() {
        PageFactory.initElements(WebDriverUtilities.getDriver(), this);
    }

    public void navigateToRetirementAndWealthMenu() {
        UIUtilities.mouseHover(industriesBootStrapLink);
        UIUtilities.click(retirementAndWealthMenu);
    }

}
