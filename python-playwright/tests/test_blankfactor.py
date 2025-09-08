import pytest
from pages.blankfactor_page import BlankfactorPage

@pytest.mark.parametrize("url", ["https://blankfactor.com"])
def test_blankfactor_journey(page, url):
    blankfactor = BlankfactorPage(page)

    blankfactor.goto_homepage()
    blankfactor.accept_policy()
    blankfactor.go_to_retirement_section()
    blankfactor.copy_text_from_third_tile()
    blankfactor.click_lets_get_started()
    title = blankfactor.verify_url_and_title()

    print("Page Title:", title)