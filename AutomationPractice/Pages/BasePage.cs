using Microsoft.Playwright;

namespace AutomationPractice.Pages
{
    public abstract class BasePage(IPage page)
    {
        private readonly IPage _page = page;

        protected ILocator GetLocator(string selector)
        {
            return _page.Locator(selector);
        }

        public async Task WaitForTimeoutAsync(int timeout)
        {
            await _page.WaitForTimeoutAsync(timeout);
        }

        public async Task<string> GetUrlAsync()
        {
            return await Task.FromResult(_page.Url);
        }

        public async Task GoToURLAsync(string url)
        {
            await _page.GotoAsync(url);
        }
    }
}
