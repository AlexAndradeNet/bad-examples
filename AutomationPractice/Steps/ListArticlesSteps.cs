using AutomationPractice.Pages;
using Microsoft.Playwright;

namespace AutomationPractice.Steps
{
    public class ListArticlesSteps(IPage page)
    {
        private readonly ListArticlesPage _listArticlesPage = new(page);

        public async Task ClickOnArticle(string articleTitle)
        {
            var articlesList = await _listArticlesPage.Articles.ElementHandlesAsync();
            foreach (var article in articlesList)
            {
                var titleElement = await article.QuerySelectorAsync("h2.entry-title");
                if (titleElement == null)
                    continue;

                string text = await titleElement.InnerTextAsync();
                if (text.Contains(articleTitle, System.StringComparison.OrdinalIgnoreCase))
                {
                    await article.ScrollIntoViewIfNeededAsync();
                    await _listArticlesPage.WaitForTimeoutAsync(1000);

                    var link = await titleElement.QuerySelectorAsync("a");
                    if (link != null)
                    {
                        await link.ClickAsync();
                        break;
                    }
                }
            }
        }
    }
}
