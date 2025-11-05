# PlaywrightTest

This project contains automated tests using **Playwright**, **NUnit**, **SpecFlow**, and **.NET**, following the Page Object Model (POM) and Behavior-Driven Development (BDD) practices.

## Table of Contents 📋

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Tests](#running-the-tests)
- [Project Structure](#project-structure)
- [Good Practices](#good-practices)

## Prerequisites ⚠️

- [.NET SDK 7.0 or higher](https://dotnet.microsoft.com/download) is required
- [Git](https://git-scm.com/downloads)
- (Optional) [Visual Studio](https://visualstudio.microsoft.com/) or [VS Code](https://code.visualstudio.com/) for IDE support

## Installation 🚀

1. **Clone the repository:**

    ```
    git clone https://github.com/your_username/PlaywrightTestBalankFactor.git
    cd PlaywrightTestBalankFactor
    ```

2. **Restore .NET dependencies:**

    ```
    dotnet restore
    ```

3. **Install Playwright browsers:**

    ```
    playwright install
    ```

    > If the above fails, install Playwright CLI globally with `npm i -g playwright` or use `dotnet tool install --global Microsoft.Playwright.CLI`

## Running the Tests 🧩

- To execute all automated tests, run:

    ```
    dotnet test
    ```

- If you want to run a specific test class or method, you can use:

    ```
    dotnet test --filter FullyQualifiedName~YourTestClassOrMethod
    ```

## Project Structure 🏗️

```
└── 📁TestAPIpart
    └── 📁Features
        ├── APIchallenge.feature
        ├── APIchallenge.feature.cs
    └── 📁Helpers
    └── 📁Page
        ├── APIchallengeApiClient.cs
    └── 📁StepDefinitions
        ├── APIchallengeSteps.cs
    ├── .gitignore
    ├── TestAPIpart.csproj
    └── README.md
```

## Good Practices 👌

- The `.gitignore` excludes `bin/`, `obj/`, logs, and other non-source files.
- Do **not** commit secrets, tokens, or environment-specific configs to the repo.
- Restore dependencies before running the tests.
- Keep dependencies up to date for Playwright, NUnit, and SpecFlow.
