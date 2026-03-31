# AutomationPractice – Playwright con C#

Este proyecto contiene un conjunto de pruebas automatizadas desarrolladas con **Playwright para .NET (C#)**, siguiendo el patrón **Page Object Model (POM)**.  
El objetivo es automatizar flujos funcionales en la web, incluyendo navegación y validaciones visuales

---

## Tecnologías utilizadas

- **Lenguaje:** C#  
- **Framework:** [Microsoft.Playwright](https://playwright.dev/dotnet/)  
- **BDD:** Reqnroll
- **Patrón:** Page Object Model (POM)  
- **Ejecución de pruebas:** 'dotnet test'  

---

## 📁 Estructura del proyecto

AutomationPractice/
│
├── Features/
│   └── Hipertextual.feature
│
├── Pages/
│   ├── BasePage.cs
│   ├── HomePage.cs
│   ├── ListArticlesPage.cs
│   ├── ArticlePage.cs
│   └── NewsletterPage.cs
│
├── Steps/
│   ├── HomePageSteps.cs
│   ├── ListArticlesSteps.cs
│   ├── ArticleSteps.cs
│   └── Newslettersteps.cs
│
├── StepDefinitions/
│   └── HipertextualStepDefinitions.cs
│
├── TestResults/
│   └── ReqnrollReport.html
│ 
├── README.md
├── reqnroll.json
├── Settings.runsettings
└── AutomationPractice.csproj

---

## Instalación y configuración

**Prerequisitos**

1. Instalar el SDK de.Net: https://dotnet.microsoft.com/download

2. Para ejecutar: dotnet test

3. Para ejecutar con reporte: dotnet test --logger:"html;LogFileName=ReqnrollReport.html" 