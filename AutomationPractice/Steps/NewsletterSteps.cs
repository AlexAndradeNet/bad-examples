using AutomationPractice.Pages;
using Microsoft.Playwright;

namespace AutomationPractice.Steps
{
    public class NewsletterSteps(IPage page)
    {
        private readonly NewsletterPage _newsletterPage = new(page);

        public async Task TypeQuery(string query)
        {
            await _newsletterPage.SearchInput.FillAsync(query);
        }

        public async Task ValidateQuery(string query)
        {
            await Assertions.Expect(_newsletterPage.SearchInput).ToHaveValueAsync(query);
        }
    }
}
