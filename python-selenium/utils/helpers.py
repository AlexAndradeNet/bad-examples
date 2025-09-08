import sys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.support import expected_conditions as EC

def go_to_url(driver, ENV_PATH, ENV_URL=None):
    if ENV_URL is None:
        ENV_URL = "http://blankfactor.com"

    if not ENV_URL:
        print("ERROR: Missing URL")
        raise ValueError("Missing URL for navigation.")
    driver.get(f"{ENV_URL}{ENV_PATH}")

def wait_url_load(driver, expected_word, timeout=20):
    try:
        WebDriverWait(driver, timeout).until(EC.url_contains(expected_word))
        return True
    except TimeoutException:
        print(f"⚠ URL did not load correctly with '{expected_word}' within {timeout}s")
        return False