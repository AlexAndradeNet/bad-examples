# Cypress Automation: Blankfactor Website

This project is an end-to-end (E2E) automation test using **Cypress**, written with **Gherkin syntax**, and structured following the **Page Object Model (POM)**. It also leverages advanced interactions like `realHover()` to mimic real user behavior.

---

## Technologies & Tools Used

| Tool                                    | Version         |
|-----------------------------------------|------------------|
| [Cypress](https://www.cypress.io)       | ^15.8.2         |
| [Cucumber Preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor) | ^24.0.0 |
| [cypress-real-events](https://github.com/dmtrKovalenko/cypress-real-events) | ^1.15.0 |
| [esbuild](https://esbuild.github.io/)   | Used as preprocessor |
| Node.js                                 | ≥ v18           |

---

## Project Structure

```
├── cypress/
│   ├── e2e/
│   │   └── features/
│   │       └── blankfactor.feature        #  Gherkin scenario(.feature)
│   └── support/
│       ├── pages/
│       │   └── HomePage.js                # Page Objects (POM)
│       ├── step_definitions/
│       │   └── blankfactor.cy.js          # Step Definitions
│       └── e2e.js                         # Global configuration and hooks
├── docs/                                  # Aditional project documentation
├── .gitignore
├── cypress.config.js                      # Cypress Main Configuration
├── package.json                           # Dependencies and scripts
├── package-lock.json
└── README.md
```

## Automated Flow

The scenario covers the following steps:

1. *Visit the Blankfactor homepage*
2. *Navigate to the Industries > Retirement and Wealth section*
3. *Scroll to the “Powering innovation in retirement services” section*
4. *Hover over the "AI & Machine Learning" card*
5. *Copy and log the card’s back-side text*
6. *Click the _Let's get started_ button*
7. *Assert the URL and page title of the Contact page*

---

## Advanced Features

-  `cy.realHover()`  
  Used to simulate real hover actions on animated cards (`flip-card`) that respond to mouse movements.

- `cy.get('@copiedCardText')`  
  Uses aliases and `.invoke('text')` to capture dynamic content from the DOM.

---

## Available Scripts

You can run tests using the following commands:

```bash
# Open the Cypress test runner (GUI)
npm run cypress:open

# Run the feature file in CLI mode
npm run test:navigation

# Run tests in headed mode (useful for CI/CD)
npm run headed
