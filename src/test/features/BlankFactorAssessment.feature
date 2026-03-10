@bf01
Feature: Blank factor Contact Page Verification

  Scenario: Verify the Blank factor contact page
    Given I navigated to the Blank factor page and accepts the cookie policy
    And I open the Retirement and Wealth section
    And I scroll to Powering Innovation in Retirement Services section
    And I mouse hover over the third tile AI & Machine learning and copies the text
    And I scroll to the bottom of the page
    And I click on the Let's get started button
    Then the page title should be "Contact | Blankfactor"
    And the page URL should contain "contact"
