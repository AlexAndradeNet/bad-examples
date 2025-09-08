from selenium.webdriver.common.by import By
from pages.base_page import GeneralBasePage

class IndustriesPage(GeneralBasePage):

    def __init__(self, driver):
        super().__init__(driver)

    def find_button_by_section(self, section_title:str, button_text:str)->tuple[str,str]:
        return (
            By.XPATH,
            f"//h3[normalize-space(text())='{section_title}']/following-sibling::div//a[@title='{button_text}']"
        )

    def go_to_specific_section_page(self, section_title, button_text):
        section_btn=self.find_button_by_section(section_title,button_text)
        self.wait_for_element_presence(section_btn)
        self.scroll_to_element(section_btn)
        self.force_click(section_btn)