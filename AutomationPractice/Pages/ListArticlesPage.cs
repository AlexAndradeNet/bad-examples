using Microsoft.Playwright;

namespace AutomationPractice.Pages
{
    public class ListArticlesPage(IPage page) : BasePage(page)
    {
        public ILocator Articles => GetLocator("article");
    }
}
