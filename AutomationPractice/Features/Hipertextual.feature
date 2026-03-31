Feature: Hipertextual Website Automation
  Automate navigation, article search, and newsletter subscription on Hipertextual website

  Scenario: Navigate and interact with articles in Hipertextual website
    Given I navigate to "https://hipertextual.com"
    When I search for "Steve Jobs"
    And I scroll to the first post about "John Ternus"
    Then I access the post and print its title
    And I validate that the URL contains "john-ternus"

  Scenario: Navigate and interact with newsletter in Hipertextual website
    Given I navigate to "https://hipertextual.com"
    When I go to the newsletter page
    And I subscribe to the newsletter with "sergio@alvarez.com"
    Then I validate that I wrote "sergio@alvarez.com" in the search input
