using Microsoft.Playwright;

namespace AutomationPractice.Pages
{
    public class NewsletterPage(IPage page) : BasePage(page)
    {
        public ILocator SearchInput => GetLocator("input[id='search-form-3']");
    }
}
