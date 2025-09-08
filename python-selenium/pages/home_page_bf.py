from selenium.webdriver.common.by import By
from pages.base_page import GeneralBasePage

class HomePage(GeneralBasePage):
    ACCEPT_ALL_BTN = (By.XPATH, '//button[@aria-label="Accept All" and text()="Accept All"]')
    INDUSTRIES_MENU_ITEM=(By.ID, 'menu-item-4871')

    def __init__(self, driver):
        super().__init__(driver)

    def accept_privacy_policy(self):
        assert self.is_element_displayed(self.ACCEPT_ALL_BTN), "Privacy policy 'Accept All' button not found or not visible"
        self.force_click(self.ACCEPT_ALL_BTN)

    def go_to_industries_page(self):
        assert self.is_element_displayed(self.INDUSTRIES_MENU_ITEM), "Industries menu item not visible in main navigation bar"
        self.force_click(self.INDUSTRIES_MENU_ITEM)