package pages;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import utilities.PropertiesUtilities;
import utilities.WebDriverUtilities;

import java.time.Duration;

class BasePage {

    public static WebDriverWait wait;
    public static JavascriptExecutor jsExecutor;
    public static Actions actions;

    protected BasePage() {
        PageFactory.initElements(WebDriverUtilities.getDriver(), this);
    }

    static {
        wait = new WebDriverWait(WebDriverUtilities.getDriver(), Duration.ofSeconds(10));
        jsExecutor = (JavascriptExecutor) WebDriverUtilities.getDriver();
        actions = new Actions(WebDriverUtilities.getDriver());
    }

    public void waitForElementToBeVisible(WebElement element) {
        wait.until(ExpectedConditions.visibilityOf(element));
    }

    public void waitForElementToBeClickable(WebElement element) {
        wait.until(ExpectedConditions.elementToBeClickable(element));
    }

    public void scrollToElement(WebElement element) {
        jsExecutor.executeScript("arguments[0].scrollIntoView({block: 'center'});", element);
    }

    public void scrollToBottom() {
        jsExecutor.executeScript("window.scrollTo(0, document.body.scrollHeight);");
    }

    public void click(WebElement element) {
        try {
            waitForElementToBeClickable(element);
            element.click();
        } catch (RuntimeException e) {
            scrollToElement(element);
            waitForElementToBeClickable(element);
            element.click();
        }
    }

    public void mouseHover(WebElement element) {
        try {
            actions.moveToElement(element).perform();
        } catch (RuntimeException e) {
            scrollToElement(element);
            actions.moveToElement(element).perform();
        }
    }

    public String getText(WebElement element) {
        try {
            return element.getText();
        } catch (RuntimeException e) {
            scrollToElement(element);
            return element.getText();
        }
    }

    public String getPageTitle() {
        return WebDriverUtilities.getDriver().getTitle();
    }

    public String getCurrentUrl() {
        return WebDriverUtilities.getDriver().getCurrentUrl();
    }

    public void manageCookies(String name, String value, String domain) {
        WebDriverUtilities.getDriver().get(PropertiesUtilities.getProperty("url"));
        var cookie = new org.openqa.selenium.Cookie.Builder(name, value).domain(domain).build();
        WebDriverUtilities.getDriver().manage().addCookie(cookie);
        WebDriverUtilities.getDriver().navigate().refresh();
    }

}
