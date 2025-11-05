using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace TestProject
{
    public class BlankfactorChallengeApiClient
    {
        private HttpClient _httpClient;
        private string _baseUrl;
        private string _token;
        private readonly JsonSerializerOptions _jsonOptions = new() { PropertyNameCaseInsensitive = true };

        public BlankfactorChallengeApiClient(string baseUrl, string token)
        {
            _baseUrl = baseUrl;
            _token = token;
            _httpClient = new HttpClient();
            SetupHttpClient();
        }

        public void SetBaseUrl(string baseUrl)
        {
            _baseUrl = baseUrl;
            SetupHttpClient();
        }

        public void SetToken(string token)
        {
            _token = token;
            SetupHttpClient();
        }

        private void SetupHttpClient()
        {
            _httpClient.DefaultRequestHeaders.Clear();
            if (!string.IsNullOrEmpty(_token))
            {
                _httpClient.DefaultRequestHeaders.Add("Authorization", $"Bearer {_token}");
            }
        }

        public async Task<List<User>> GetUsersAsync()
        {
            var response = await _httpClient.GetAsync($"{_baseUrl}/users");
            response.EnsureSuccessStatusCode();
            var content = await response.Content.ReadAsStringAsync();
            return JsonSerializer.Deserialize<List<User>>(content, _jsonOptions) ?? new List<User>();
        }

        public async Task<List<Post>> GetPostsByUserIdAsync(int userId)
        {
            var response = await _httpClient.GetAsync($"{_baseUrl}/posts?userId={userId}");
            if (!response.IsSuccessStatusCode)
            {
                Console.WriteLine($"Failed to get posts for user {userId}, status: {response.StatusCode}");
                return new List<Post>();
            }
            var content = await response.Content.ReadAsStringAsync();
            return JsonSerializer.Deserialize<List<Post>>(content, _jsonOptions) ?? new List<Post>();
        }

        public async Task<Post> UpdatePostTitleAsync(int postId, string newTitle)
        {
            var updateData = new { title = newTitle };
            var contentBody = new StringContent(JsonSerializer.Serialize(updateData), Encoding.UTF8, "application/json");
            var method = new HttpMethod("PATCH");
            var request = new HttpRequestMessage(method, $"{_baseUrl}/posts/{postId}") { Content = contentBody };
            var response = await _httpClient.SendAsync(request);
            response.EnsureSuccessStatusCode();
            var content = await response.Content.ReadAsStringAsync();
            return JsonSerializer.Deserialize<Post>(content, _jsonOptions) ?? new Post();
        }

        public async Task<Post> CreatePostAsync(Post newPost)
        {
            var contentBody = new StringContent(JsonSerializer.Serialize(newPost), Encoding.UTF8, "application/json");
            var response = await _httpClient.PostAsync($"{_baseUrl}/posts", contentBody);

            if (!response.IsSuccessStatusCode)
            {
                throw new Exception($"Failed to create post. Status code: {response.StatusCode}");
            }

            var content = await response.Content.ReadAsStringAsync();
            return JsonSerializer.Deserialize<Post>(content, _jsonOptions) ?? new Post();
        }
    }

    public class User
    {
        public int Id { get; set; }
        public string Email { get; set; }
    }

    public class Post
    {
        public int UserId { get; set; }
        public int Id { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
    }
}
