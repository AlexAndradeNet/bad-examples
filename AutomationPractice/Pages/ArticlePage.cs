using Microsoft.Playwright;

namespace AutomationPractice.Pages
{
    public class ArticlePage(IPage page) : BasePage(page)
    {
        public ILocator ArticleTitle => GetLocator("h1.entry-title");
    }
}
