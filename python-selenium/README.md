# 🧪 Selenium + Pytest Automation Framework

This is a lightweight, modular Python automation framework built with **Selenium WebDriver**, **Pytest**, and **Allure** for elegant reporting. Designed for scalability, maintainability, and ease of use.

## 👨‍💻 Author

**Andres Velez Salazar**  
QA Automation Engineer  
[LinkedIn](https://www.linkedin.com/in/andres-mauricio-velez-salazar-qa) | [GitHub](https://github.com/avsautomation/)

<h2 id="prerequisites">1. Prerequisites</h2>
Before you start working with this project, ensure that you have the following prerequisites:

- **Python:** If not already installed, you can download it from [python.org](https://www.python.org/downloads/).

- **pip:** You might need to install pip if it's not already available. You can usually install it alongside Python.

- **Allure:** You may need to install Allure for generating test reports. Follow the instructions below based on your operating system. To install Allure, you will need administrative rights and the latest version of the JDK installed.

    - **macOS:** You can install Allure using Homebrew:
      ```bash
      brew install allure
      ```

    - **Windows:** Follow these steps to install Allure:

        1. Install Scoop (a package manager for Windows):
           - Open PowerShell as an administrator.
           - Run the following command to install Scoop:
             ```powershell
             Set-ExecutionPolicy RemoteSigned -Scope CurrentUser; Invoke-Expression (New-Object System.Net.WebClient).DownloadString('https://get.scoop.sh')
             ```

        2. Add Scoop's environment variable to your PATH.

        3. Verify the installation:
           ```bash
           scoop --version
           ```

        4. Install Allure:
           ```bash
           scoop install allure
           ```

        5. Update Allure to the latest version:
           ```bash
           scoop update allure
           ```

<h2 id="getting_started">2. Getting Started</h2>

To get started with this project, follow these steps:

1. Clone this repository to your local machine.

2. Open a terminal and navigate to the project directory.

3. Create a virtual environment using Python:
   - **macOS:**
     ```bash
     python -m venv myenv
     source myenv/bin/activate
     ```
   - **Windows:**
     ```bash
     python -m venv myenv
     myenv\Scripts\activate
     ```

4. Install all the required packages:
   ```bash
   pip install -r requirements.txt
   ```

5. Running Test
     - **Run the test including print the comments and generate an Allure report:**
        ```bash
        pytest tests/test_base.py --alluredir=report
        ```

6. Command to Generate and View the Report (this command will open a browser with the report)
   ```bash
   allure serve ./report
   ```

<h2 id="reports">3. Report</h2>

Test execution results are stored in this folder, allowing for the generation of execution reports. The tool selected for report generation is Allure.

Allure is described as a flexible, open-source, multi-language test reporting tool. Its main purpose is to create clear, visually appealing, and informative web-based reports from your automated test results.

Here's what it does:

`Visual Reporting`: It generates interactive reports with charts, graphs, and timelines to help understand test outcomes quickly.

`Detailed Analysis`: Reports include details like test steps, execution time, status, historical trends, and comprehensive error information (including screenshots and stack traces) to aid debugging.

`Integration`: It integrates with numerous testing frameworks (like the Python/Selenium framework mentioned in your README.md) and CI/CD tools (like Jenkins, TeamCity).

`Collaboration`: The reports are easy to share and understand, facilitating communication between developers, testers, and managers.

<h2 id="pages">4. Pages</h2>

This folder organizes pages for tested applications and those planned for future testing.

<h2 id="test">5. Test</h2>

This folder organizes tests for tested applications and those planned for future testing.

<h2 id="utils">6. Utils</h2>

This folder contains all the tools necessary for the framework to operate. However, these tools do not belong to a specific application, and their use isn't limited to a single type of testing. For example, it contains a file defining various dictionaries with constants for the different applications and their pages. There is also the `helpers.py` file.
