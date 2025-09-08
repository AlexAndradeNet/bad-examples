import pytest
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

@pytest.fixture
def driver(request):
    chrome_options = webdriver.ChromeOptions()

    chrome_options.add_experimental_option(
        "prefs", {"profile.default_content_setting_values.notifications": 2}
    )
    chrome_options.add_argument("--ignore-certificate-errors")
    chrome_options.add_argument("--ignore-ssl-errors=yes")
    chrome_options.add_argument("--allow-insecure-localhost")

    headless = getattr(request, "param", {}).get("headless", False)
    if headless:
        chrome_options.add_argument("--headless=new")
        chrome_options.add_argument("--disable-gpu")
        chrome_options.add_argument("--window-size=1920,1080")
        chrome_options.add_argument("--no-sandbox")
        chrome_options.add_argument("--disable-dev-shm-usage")
        chrome_options.add_argument("--disk-cache-size=0")

    service = Service(ChromeDriverManager().install())
    browser = webdriver.Chrome(service=service, options=chrome_options)

    app_url = getattr(request, "param", {}).get("url", "http://blankfactor.com")
    browser.get(app_url)

    if not headless:
        browser.set_window_position(1920, 0)
        browser.maximize_window()

    yield browser
    browser.quit()