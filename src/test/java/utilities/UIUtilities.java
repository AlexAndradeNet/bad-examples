package utilities;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

public class UIUtilities {

    public static WebDriverWait wait;
    public static JavascriptExecutor jsExecutor;
    public static Actions actions;

    static {
        wait = new WebDriverWait(WebDriverUtilities.getDriver(), Duration.ofSeconds(10));
        jsExecutor = (JavascriptExecutor) WebDriverUtilities.getDriver();
        actions = new Actions(WebDriverUtilities.getDriver());
    }

    public static void waitForElementToBeVisible(WebElement element) {
        wait.until(ExpectedConditions.visibilityOf(element));
    }

    public static void waitForElementToBeClickable(WebElement element) {
        wait.until(ExpectedConditions.elementToBeClickable(element));
    }

    public static void scrollToElement(WebElement element) {
        jsExecutor.executeScript("arguments[0].scrollIntoView({block: 'center'});", element);
    }

    public static void scrollToBottom() {
        jsExecutor.executeScript("window.scrollTo(0, document.body.scrollHeight);");
    }

    public static void click(WebElement element) {
        try {
            waitForElementToBeClickable(element);
            element.click();
        } catch (RuntimeException e) {
            scrollToElement(element);
            waitForElementToBeClickable(element);
            element.click();
        }
    }

    public static void mouseHover(WebElement element) {
        try {
            actions.moveToElement(element).perform();
        } catch (RuntimeException e) {
            scrollToElement(element);
            actions.moveToElement(element).perform();
        }
    }

    public static String getText(WebElement element) {
        try {
            return element.getText();
        } catch (RuntimeException e) {
            scrollToElement(element);
            return element.getText();
        }
    }

}
