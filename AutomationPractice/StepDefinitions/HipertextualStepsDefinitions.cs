using System.Xml.Serialization;
using AutomationPractice.Pages;
using AutomationPractice.Steps;
using Microsoft.Playwright;
using Reqnroll;

namespace AutomationPractice.StepDefinitions
{
    [Binding]
    public class HipertextualStepsDefinitions(IPage page)
    {
        private readonly HomePageSteps _homeSteps = new(page);
        private readonly ListArticlesSteps _listArticlesSteps = new(page);
        private readonly ArticleSteps _articleSteps = new(page);
        private readonly NewsletterSteps _newsletterSteps = new(page);

        [Given(@"I navigate to ""(.*)""")]
        public async Task GivenINavigateTo(string url)
        {
            await _homeSteps.GoToURLAsync(url);
        }

        [When(@"I search for ""(.*)""")]
        public async Task WhenISearchFor(string term)
        {
            await _homeSteps.OpenSearchAsync();
            await _homeSteps.SearchAsync(term);
        }

        [When(@"I scroll to the first post about ""(.*)""")]
        public async Task WhenIScrollToTheFirstPostAbout(string articleTitle)
        {
            await _listArticlesSteps.ClickOnArticle(articleTitle);
        }

        [Then(@"I access the post and print its title")]
        public async Task WhenIAccessThePostAndPrintItsTitle()
        {
            await _articleSteps.GetTitle();
        }

        [Then(@"I validate that the URL contains ""(.*)""")]
        public async Task ThenIValidateThatTheURLContains(string expected)
        {
            await _articleSteps.ValidateUrlContains(expected);
        }

        [When(@"I go to the newsletter page")]
        public async Task WhenIGoToTheNewsletterPage()
        {
            await _homeSteps.ClickOnNewsletter();
        }

        [When(@"I subscribe to the newsletter with ""(.*)""")]
        public async Task WhenISubscribeToTheNewsletterWith(string email)
        {
            await _newsletterSteps.TypeQuery(email);
        }

        [Then(@"I validate that I wrote ""(.*)"" in the search input")]
        public async Task ThenIValidateThatIAmSuccessfullySubscribed(string query)
        {
            await _newsletterSteps.ValidateQuery(query);
        }
    }
}
