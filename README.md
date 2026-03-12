# Blankfactor Automation - Playwright

A UI automation testing framework for the Blankfactor website, built with Playwright and TypeScript.

## Tech Stack

- **TypeScript** - Programming language
- **Playwright** - Browser automation framework
- **Node.js** - For build tool
- **dotenv** - Environment configuration management


## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- Visual Studio Code (Recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Playwright browsers**
   ```bash
   npx playwright install
   ```

4. **Configure environment**
   
   Create `.env` file and edit it with the necessary environment variables:
   ```env
   ENVIRONMENT=TEST

   TEST=test_environment_url
   STG=stag_environment_url
   DEV=dev_environment_url
   UAT=uat_environment_url
   ```

## Running Tests

### Run all tests
```bash
npm run tests
```

### View test report
```bash
npm run report
```
- Use the scripts in `package.json` file to run tests with different options

## Key Features

- **Page Object Model (POM)** - Web-page elements and actions
- **Environment Management** - Multi-environment support (TEST, STG, DEV, UAT, PROD)
- **Custom Test Fixtures** - Automated navigation and cookie acceptance
- **Rich Reporting** - Playwright HTML report
- **Retry Logic** - Configured to retry failed tests
- **Parallel Execution** - Tests can run in parallel with multiple workers
- **Screenshot, Trace and Video Recording** - Automatic capture on test failures
