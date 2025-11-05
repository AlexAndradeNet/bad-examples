using NUnit.Framework;
using TechTalk.SpecFlow;
using System.Threading.Tasks;
using System.Collections.Generic;
using System;
using System.Linq;

namespace TestProject.StepDefinitions
{
    [Binding]
    public class BlankfactorChallengeSteps
    {
        private readonly BlankfactorChallengeApiClient _apiClient;
        private readonly ScenarioContext _scenarioContext;

        private int _userId;
        private List<Post> _userPosts;
        private Post _modifiedPost;
        private Post _createdPost;

        public BlankfactorChallengeSteps(ScenarioContext scenarioContext)
        {
            _scenarioContext = scenarioContext;
            _apiClient = new BlankfactorChallengeApiClient("https://jsonplaceholder.typicode.com", "THIS-IS-A-FAKE-TOKEN");
        }

        [Given(@"the base API URL is ""(.*)""")]
        public void GivenTheBaseApiUrlIs(string url)
        {
            _apiClient.SetBaseUrl(url);
        }

        [Given(@"the request token is ""(.*)""")]
        public void GivenTheRequestTokenIs(string token)
        {
            _apiClient.SetToken(token);
        }

        [When(@"I get a random user ID")]
        public async Task WhenIGetARandomUserId()
        {
            var users = await _apiClient.GetUsersAsync();
            var random = new Random();
            var randomUser = users[random.Next(users.Count)];

            var posts = await _apiClient.GetPostsByUserIdAsync(randomUser.Id);
            if (posts == null || posts.Count == 0)
            {
                await TryFallbackUserWithPosts(users);
                return;
            }

            _userId = randomUser.Id;
            _userPosts = posts;
            _scenarioContext["UserEmail"] = randomUser.Email;
            Console.WriteLine($"Selected random user {_userId} with {_userPosts.Count} posts.");
        }

        private async Task TryFallbackUserWithPosts(List<User> users)
        {
            for (int userId = 1; userId <= 10; userId++)
            {
                var posts = await _apiClient.GetPostsByUserIdAsync(userId);
                if (posts != null && posts.Count > 0)
                {
                    _userId = userId;
                    _userPosts = posts;
                    var userFallback = users.FirstOrDefault(u => u.Id == userId);
                    _scenarioContext["UserEmail"] = userFallback != null ? userFallback.Email : "";
                    Console.WriteLine($"Using fallback user {userId} with {posts.Count} posts.");
                    return;
                }
            }
            throw new InvalidOperationException("No user with posts found after fallback attempts.");
        }

        [Then(@"I print the user's email address to the console")]
        public void ThenIPrintTheUserSEmailAddressToTheConsole()
        {
            var email = _scenarioContext["UserEmail"] as string;
            Console.WriteLine($"User's email: {email}");
        }

        [When(@"I get the posts for the user")]
        public async Task WhenIGetThePostsForTheUser()
        {
            _userPosts = await _apiClient.GetPostsByUserIdAsync(_userId);
        }

        [Then(@"each post ID should be an integer between 1 and 100")]
        public void ThenEachPostIDShouldBeAnIntegerBetween1And100()
        {
            Assert.That(_userPosts.Count, Is.GreaterThan(0), "No posts found for user.");
            foreach (var post in _userPosts)
            {
                Assert.That(post.Id, Is.InRange(1, 100), $"Post ID {post.Id} is not between 1 and 100");
            }
        }

        [Then(@"I print each post's ID and title to the console")]
        public void ThenIPrintEachPostSIDAndTitleToTheConsole()
        {
            foreach (var post in _userPosts)
            {
                Console.WriteLine($"Post ID: {post.Id}, Title: {post.Title}");
            }
        }

        [When(@"I modify the title of a random post")]
        public async Task WhenIModifyTheTitleOfARandomPost()
        {
            if (_userPosts == null || !_userPosts.Any())
            {
                throw new InvalidOperationException("No posts available to modify.");
            }
            var random = new Random();
            var postToModify = _userPosts[random.Next(_userPosts.Count)];
            postToModify.Title += " - Modified";

            _modifiedPost = await _apiClient.UpdatePostTitleAsync(postToModify.Id, postToModify.Title);
        }

        [Then(@"I print the modified post ID and title from the response to the console")]
        public void ThenIPrintTheModifiedPostIDAndTitleFromTheResponseToTheConsole()
        {
            Console.WriteLine($"Modified Post ID: {_modifiedPost.Id}, Title: {_modifiedPost.Title}");
        }

        [When(@"I create a post with non-empty title and body")]
        public async Task WhenICreateAPostWithNon_EmptyTitleAndBody()
        {
            var newPost = new Post
            {
                UserId = _userId,
                Title = "New Post Title for Blankfactor",
                Body = "This is the body of the new post for Blankfactor."
            };
            _createdPost = await _apiClient.CreatePostAsync(newPost);
        }

        [Then(@"I validate the response according to the API documentation")]
        public void ThenIValidateTheResponseAccordingToTheApiDocumentation()
        {
            Assert.That(_createdPost, Is.Not.Null);
            Assert.That(_createdPost.Id, Is.GreaterThanOrEqualTo(101), "Created post ID should be greater or equal to 101.");
            Assert.That(_createdPost.Title, Is.Not.Null.And.Not.Empty);
            Assert.That(_createdPost.Body, Is.Not.Null.And.Not.Empty);
            Assert.That(_createdPost.UserId, Is.EqualTo(_userId));
        }

        [Then(@"I print the created post's ID and title to the console")]
        public void ThenIPrintTheCreatedPostSIDAndTitleToTheConsole()
        {
            Console.WriteLine($"Created Post ID: {_createdPost.Id}, Title: {_createdPost.Title}");
        }
    }
}
