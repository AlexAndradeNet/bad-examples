using Microsoft.Playwright;

namespace AutomationPractice.Pages
{
    public class HomePage(IPage page) : BasePage(page)
    {
        public ILocator SearchIcon => GetLocator("#search-toggle");
        public ILocator SearchInput => GetLocator("#search-form-2");
        public ILocator SearchButton => GetLocator("#header-search .search-submit");
        public ILocator NewsletterLink =>
            GetLocator("header a[href*='/newsletter/']:visible").First;
    }
}
