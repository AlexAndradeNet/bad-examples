from playwright.sync_api import Page, expect

class BlankfactorPage:
    def __init__(self, page: Page):
        self.page = page

    def goto_homepage(self):
        self.page.goto("https://blankfactor.com")

    def accept_policy(self):
        try:
            accept_button = self.page.locator("button:has-text('Accept All')").nth(0)
            accept_button.wait_for(state="visible", timeout=10000)
            accept_button.click()
            print("✅ Accepted cookie policy.")
        except Exception as e:
            print(f"⚠️ Cookie modal not found or already dismissed. Skipping. Error: {e}")

    def go_to_retirement_section(self):
        industries = self.page.locator("nav >> text=Industries")
        industries.wait_for(state="visible", timeout=10000)
        industries.hover()
        self.page.wait_for_timeout(1500)

        retirement = self.page.get_by_role("link", name="Retirement and wealth")
        retirement.wait_for(state="visible", timeout=10000)
        retirement.click()
        self.page.wait_for_load_state("networkidle")
        print("✅ Clicked on 'Retirement & Wealth'")

    def copy_text_from_third_tile(self):
        self.page.locator("text=Powering innovation in retirement services").scroll_into_view_if_needed()
        self.page.wait_for_timeout(1000)

        tile = self.page.locator(".card-wrapper .flip-card-front.card-front").nth(2)
        tile.wait_for(state="visible", timeout=10000)
        tile.hover()
        text = tile.inner_text()
        print("📌 Third Tile Text:", text.strip())

    def click_lets_get_started(self):
        button = self.page.locator("text=Let's get started")
        button.scroll_into_view_if_needed()
        button.click()
        self.page.wait_for_load_state("networkidle")

    def verify_url_and_title(self):
        current_url = self.page.url
        assert "contact" in current_url, f"Unexpected URL: {current_url}"
        title = self.page.title()
        assert "Contact" in title, f"Unexpected title: {title}"
        print("✅ Verified page title and URL")
        print("📄 Page Title:", title)
        return title
