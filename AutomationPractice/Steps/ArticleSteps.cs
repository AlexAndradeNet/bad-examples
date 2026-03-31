using AutomationPractice.Pages;
using Microsoft.Playwright;
using NUnit.Framework;

namespace AutomationPractice.Steps
{
    public class ArticleSteps(IPage page)
    {
        private readonly ArticlePage _articlePage = new(page);

        public async Task GetTitle()
        {
            var articleTitle = await _articlePage.ArticleTitle.InnerTextAsync();
            Console.WriteLine($"Article title: {articleTitle}");
        }

        public async Task ValidateUrlContains(string expected)
        {
            Assert.That(
                await _articlePage.GetUrlAsync(),
                Does.Contain(expected).IgnoreCase,
                $"Validation failed: Unexpected URL - {await _articlePage.GetUrlAsync()}"
            );
            Console.WriteLine("Validation passed: Correct page loaded.");
        }
    }
}
