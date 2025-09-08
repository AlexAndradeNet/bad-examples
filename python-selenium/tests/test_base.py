import pytest
from pages.home_page_bf import HomePage
from pages.industries_page import IndustriesPage
from pages.retirement_and_wealth_page import RetirementAndWealthPage
from pages.contact_page import ContactPage

def test_base(driver):
    homepage=HomePage(driver)
    industriespage=IndustriesPage(driver)
    retirementsandwealthpage = RetirementAndWealthPage(driver)
    contactpage = ContactPage(driver)

    # 1 Accept policy
    homepage.accept_privacy_policy()
    
    # 2 Navigate to Retirement and Wealth section
    homepage.go_to_industries_page()
    industriespage.go_to_specific_section_page('Retirement and Wealth','Learn More')

    # 3 Interact with AI card and get info
    retirementsandwealthpage.go_to_powering_innovation_section()
    retirementsandwealthpage.go_to_card_and_hover()
    print(f"The visible text is: {retirementsandwealthpage.obtain_visible_text_after_hover()}")
    
    # 4 Scroll and click on the "Let's get started"
    retirementsandwealthpage.scroll_to_lets_get_started_button_and_click()

    # 5 - 6 Verify the URL and title, also print the title 
    contactpage.assert_on_contact_page('contact','Contact')
    print(f"Visible txt of the heading is: {contactpage.get_visible_text_of_heading()}")