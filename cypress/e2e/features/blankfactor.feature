Feature: Navigation on Blankfactor site

  Scenario: Visit Blankfactor homepage
    Given the user visits the homepage
    When he navigates through the site and copy the third card's text that should include 'Automate your operations'
    Then the site is loaded successfully
