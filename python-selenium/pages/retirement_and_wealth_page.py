from selenium.webdriver.common.by import By
from pages.base_page import GeneralBasePage

class RetirementAndWealthPage(GeneralBasePage):
    POWERING_INNOVATION_SUBTITLE = (By.XPATH, "//h2[normalize-space(text())='Powering innovation in']")
    AI_MACHINE_LEARNING_CARD = (By.XPATH, "//div[@class='card-text'][contains(normalize-space(.), 'AI & Machine learning')]")
    AI_CARD_BACK = (By.XPATH, "//div[@class='card-text'][contains(normalize-space(.), 'AI & Machine learning')]/ancestor::div[contains(@class,'flip-card-inner')][1]//div[@class='card-text small']")
    LETS_GET_STARTED_BTN=(By.XPATH, '//a[contains(@class,"btn-white-empty") and normalize-space(.)="Let\'s get started"]')

    def __init__(self, driver):
        super().__init__(driver)

    def go_to_powering_innovation_section(self):
        self.wait_for_element_presence(self.POWERING_INNOVATION_SUBTITLE)
        self.scroll_to_element(self.POWERING_INNOVATION_SUBTITLE)
    
    def go_to_card_and_hover(self):
        self.scroll_to_element_and_hover(self.AI_MACHINE_LEARNING_CARD)

    def obtain_visible_text_after_hover(self):
        return self.get_text(self.AI_CARD_BACK)
    
    def scroll_to_lets_get_started_button_and_click(self):
        self.scroll_to_element(self.LETS_GET_STARTED_BTN)
        self.force_click(self.LETS_GET_STARTED_BTN)