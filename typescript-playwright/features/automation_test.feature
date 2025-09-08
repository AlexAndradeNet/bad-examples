Feature: QA Automation Test

  Scenario: Navigate and interact with Blankfactor website
    Given I navigate to "http://blankfactor.com"
    And I accept the policy
    When I go to the "Industries" and open "Retirement and Wealth"
    And I scroll to "Powering innovation in retirement services"
    And I hover and copy text from the third tile under "AI & Machine Learning"
    And I scroll to the bottom and click on "Let's get started"
    Then I should verify the URL and title
    And I should print the title text