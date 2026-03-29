package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LandingPage extends BasePage {

    @FindBy(xpath = "(//span[text()='Industries'])[2]")
    public WebElement industriesBootStrapLink;

    @FindBy(xpath = "//h6[normalize-space(text())='Retirement and wealth']")
    public WebElement retirementAndWealthMenu;

    public void navigateToRetirementAndWealthMenu() {
        mouseHover(industriesBootStrapLink);
        click(retirementAndWealthMenu);
    }

}
