Feature: JSONPlaceholder API Automation
  Background:
    Given the base API URL is "https://jsonplaceholder.typicode.com"
    And the request token is "THIS-IS-A-FAKE-TOKEN"

  Scenario: Full scenario: get user, posts, modify post, create post
    When I get a random user ID
    Then I print the user's email address to the console
    When I get the posts for the user
    Then each post ID should be an integer between 1 and 100
    And I print each post's ID and title to the console
    When I modify the title of a random post
    Then I print the modified post ID and title from the response to the console
    When I create a post with non-empty title and body
    Then I validate the response according to the API documentation
    And I print the created post's ID and title to the console
