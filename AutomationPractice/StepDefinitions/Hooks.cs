using Microsoft.Playwright;
using Reqnroll;
using Reqnroll.BoDi;

namespace AutomationPractice.StepDefinitions
{
    [Binding]
    internal class Hooks(IObjectContainer objectContainer)
    {
        private readonly IObjectContainer _objectContainer = objectContainer;

        [BeforeScenario]
        public async Task SetupPlaywright()
        {
            var pw = await Playwright.CreateAsync();
            var browser = await pw.Chromium.LaunchAsync(
                new BrowserTypeLaunchOptions { Headless = false }
            );
            var browserContext = await browser.NewContextAsync(
                new BrowserNewContextOptions { BypassCSP = true }
            );
            var page = await browserContext.NewPageAsync();
            _objectContainer.RegisterInstanceAs(browser);
            _objectContainer.RegisterInstanceAs(page);
        }
    }
}
