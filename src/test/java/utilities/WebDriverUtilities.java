package utilities;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.safari.SafariDriver;

public class WebDriverUtilities {

    private static WebDriver driver;

    private WebDriverUtilities() {
    }

    public static WebDriver getDriver() {
        if (driver == null) {
            switch (PropertiesUtilities.getProperty("browser")) {
                case "chrome":
                    driver = new ChromeDriver();
                    break;
                case "firefox":
                    driver = new FirefoxDriver();
                    break;
                case "safari":
                    driver = new SafariDriver();
                    break;
                default:
                    throw new RuntimeException("Unsupported browser: " + PropertiesUtilities.getProperty("browser"));
            }
        }
        return driver;
    }


    public static void closeDriver() {
        if (driver != null) {
            driver.quit();
        }
    }

}
