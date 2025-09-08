from selenium.common.exceptions import StaleElementReferenceException
from selenium.webdriver.remote.webelement import WebElement
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.action_chains import ActionChains
from selenium.common.exceptions import TimeoutException
from utils.helpers import wait_url_load
from utils.constants import DEFAULT_TIMES

class GeneralBasePage:
    TIMEOUT_CONSTANT = DEFAULT_TIMES["DEFAULT_TIMEOUT"]
    def __init__(self, driver):
        self.driver = driver

    def click(self, by_locator, timeout=TIMEOUT_CONSTANT):
        try:
            element = self.wait_for_element_clickable(by_locator, timeout)
            self.driver.execute_script("arguments[0].click();", element)
        except StaleElementReferenceException:
            print(f"⚠ Element {by_locator} became stale. Retrying...")
            element = self.wait_for_element_clickable(by_locator)
            self.driver.execute_script("arguments[0].click();", element)

    def force_click(self, target):
        # Support for both: locator (tuple) or WebElement
        if isinstance(target, tuple):
            element = self.driver.find_element(*target)
        elif isinstance(target, WebElement):
            element = target
        else:
            raise TypeError("force_click expects a locator (By, value) or a WebElement.")
        actions = ActionChains(self.driver)
        actions.move_to_element(element).click().perform()

    def get_text(self, by_locator):
        try:
            element = self.wait_for_element_visibility(by_locator)
            return element.text.strip()
        except Exception as e:
            print(f"Error retrieving text for locator {by_locator}: {e}")
            return None
    
    def scroll_to_element(self, by_locator):
        element = self.driver.find_element(*by_locator)
        self.driver.execute_script(
            "arguments[0].scrollIntoView({block: 'center'});", element
        )
        self.driver.execute_script("window.scrollBy(0, -100);")

    def scroll_to_element_and_hover(self, by_locator):
        element = self.driver.find_element(*by_locator)
        self.driver.execute_script("arguments[0].scrollIntoView({block: 'center'});", element)
        actions = ActionChains(self.driver)
        actions.move_to_element(element).perform()

    def is_element_displayed(self, by_locator, timeout=TIMEOUT_CONSTANT):
        try:
            WebDriverWait(self.driver, timeout).until(
                EC.presence_of_element_located(by_locator)
            )
            return self.driver.find_element(*by_locator).is_displayed()
        except:
            print(f"Error waiting for element {by_locator}")
            return False
    
    def wait_for_element_visibility(self, by_locator, timeout=TIMEOUT_CONSTANT):
        return WebDriverWait(self.driver, timeout).until(
            EC.visibility_of_element_located(by_locator)
        )

    def wait_for_element_presence(self, by_locator, timeout=TIMEOUT_CONSTANT):
        try:
            element = WebDriverWait(self.driver, timeout).until(
                EC.presence_of_element_located(by_locator)
            )
            assert element is not None, f"Element with locator {by_locator} was not found in the DOM within {timeout} seconds."
            return element
        except TimeoutException:
            raise AssertionError(f"Timeout waiting for element with locator {by_locator} to be present.")
        except Exception as e:
            raise AssertionError(f"Error while waiting for element {by_locator}: {str(e)}")

    def verify_url_and_title(self, expected_word, expected_title, timeout=TIMEOUT_CONSTANT):
        wait_url_load(self.driver, expected_word, timeout)
        actual_url = self.driver.current_url
        if expected_word is not None:
            assert expected_word in actual_url, f"URL does not contain '{expected_word}'!\nActual: {actual_url}"
        
        actual_title =self.driver.title
        if expected_title is not None:
            assert expected_title in actual_title, f"Title does not contain '{expected_title}'!\nActual: {actual_title}"
        print("URL and Title verified successfully")