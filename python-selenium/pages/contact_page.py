from selenium.webdriver.common.by import By
from pages.base_page import GeneralBasePage

class ContactPage(GeneralBasePage):
    LET_TALK_HEADING = (By.XPATH, '//h1[contains(@class,"section-title")]')
    
    def __init__(self, driver):
        super().__init__(driver)

    def assert_on_contact_page(self, expected_word_in_url, expected_word_in_title):
        self.verify_url_and_title(expected_word_in_url,expected_word_in_title)

    def get_visible_text_of_heading(self):
        return self.get_text(self.LET_TALK_HEADING)
        
    