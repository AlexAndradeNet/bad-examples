using AutomationPractice.Pages;
using Microsoft.Playwright;

namespace AutomationPractice.Steps
{
    public class HomePageSteps(IPage page)
    {
        private readonly HomePage _homePage = new(page);

        public async Task GoToURLAsync(string url)
        {
            await _homePage.GoToURLAsync(url);
        }

        public async Task OpenSearchAsync()
        {
            await _homePage.SearchIcon.HoverAsync();
            await _homePage.WaitForTimeoutAsync(1000);
            await _homePage.SearchIcon.ClickAsync();
        }

        public async Task SearchAsync(string term)
        {
            await _homePage.SearchInput.FillAsync(term);
            await _homePage.SearchButton.ClickAsync();
        }

        public async Task ClickOnNewsletter()
        {
            await _homePage.NewsletterLink.ClickAsync();
        }
    }
}
