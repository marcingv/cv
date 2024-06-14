# Table of Contents

1. [🚀 My Stellar Resume Website 🌟](#-my-stellar-resume-website-)
2. [Running the Project](#running-the-project)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#-running-the-project)
  - [Running Tests](#running-tests)
    - [Running Tests with Code Coverage](#running-tests-with-code-coverage)
  - [Running Lint Checks](#running-lint-checks)
  - [Other Commands](#other-commands)
3. [My Skills Summary](#-my-skills-summary)

# 🚀 My Stellar Resume Website 🌟

Welcome to my resume website repository! Here, embark on a journey through my universe of skills and experiences, meticulously crafted into a dazzling platform. This project is not just a resume; it's a constellation of my technical prowess and creative flair.

🔭 Explore my celestial resume: [https://marcin.gawski.info](https://marcin.gawski.info)!

## 🌐 General Info

This repository orbits as an Nx monorepo workspace, featuring two primary applications: the backend, a NestJS masterpiece, and the frontend, a radiant Angular 18 creation. Both applications are encapsulated in the cosmic embrace of Docker containers, ensuring seamless deployment and management across galaxies.

The cosmic ballet of continuous integration and continuous deployment (CI/CD) is choreographed with Docker, Kubernetes, and GitHub Actions, orchestrating flawless development workflows and celestial deployment processes. Additionally, every module undergoes rigorous testing under the watchful gaze of Jest and Cypress, ensuring stellar code quality and reliability.

## 🌌 Backend

The backend, powered by the gravitational force of NestJS, weaves intricate REST and GraphQL APIs into the fabric of space-time. Swagger API documentation serves as a star map for easy navigation through the API cosmos. Notably, voyagers can download my CV in PDF format directly from the API, making it truly out-of-this-world.

## ✨ Frontend

The frontend, a cosmic symphony orchestrated by Angular 18, offers a transcendental user experience. With the power of server-side rendering (SSR) and SEO optimizations, the website shines brightly, guiding travelers through the cosmos of discovery. It speaks the universal languages of Polish and English, bridging the gap between civilizations.

The frontend's design, as fluid as the cosmic ether, offers both light and dark modes, adapting effortlessly to the preferences of celestial wanderers. Its responsive layout navigates the cosmic expanse, ensuring seamless exploration across all devices. And with Tailwind CSS, styling becomes a celestial dance of elegance and efficiency.

---

# 🚀 Running the project

To run this project, follow these steps:

## Prerequisites

Make sure you have the following prerequisites installed:

- Node.js (>= 20.0.0)
- npm (>= 10.0.0)
- Docker (>= 26.0.0)
- Docker Compose (>= 1.28.0)

## Installation

1. Clone the repository to your local machine
2. Navigate to the root directory of the project and install dependencies: `npm install`

## Running the project

To run the project using, follow these steps:

1. Navigate to the project's root directory
2. Use Docker Compose to start all the services: 
```bash
docker-compose up 
# OR:
npm run start
```

Once all services are running, you can access the application by navigating to:

- Frontend: http://localhost:4200
- Backend (REST): http://localhost:3000/api/doc
- Backend (GraphQL): http://localhost:3000/graphql

To stop the services simply use following command:
```bash
docker-compose down
```

## Running tests

To run tests use the following set of commands:

```bash
# To run all unit tests
npm run test
# OR:
nx run-many -t test

# To run all e2e tests:
npm run e2e
# OR:
nx run-many -t e2e

# Other useful nx commands:
nx run frontend-angular:test # Run unit tests for specified application or library
nx run frontend-angular-e2e:e2e # Run e2e tests only for frontend application
nx run frontend-angular-e2e:e2e --watch # Run e2e tests for frontend in watch mode
nx run backend-e2e:e2e # Run e2e tests only for backend application
nx test frontend-angular # Run unit tests only for frontend application
nx e2e frontend-angular-e2e # Run e2e tests only for frontend application
```

### Running tests with code coverage

You can run tests with code coverage report using the following commands:

#### Running unit tests with code coverage

```bash
nx run-many -t test --coverage
nx run frontend-angular:test --coverage
```

Code coverage reports are saved in a directory: `<projectRoot>/coverage`

#### Running frontend e2e tests with code coverage

```bash
nx run frontend-angular-e2e:e2e:coverage
# OR:
nx e2e frontend-angular-e2e --configuration=coverage
```

After run, the code coverage report is available in directory: `<projectRoot>/apps/frontend-angular-e2e/coverage`

## Running lint checks

To run lint checks use the following set of commands:

```bash
# Run lint checks for all applications and libraries
npm run lint
# OR:
nx run-many -t lint 

# Run lint checks only for specified application or library:
nx run frontend-angular:lint
```

## Other commands

You interact with this workspace using the standard Nx CLI and its capabilities. 
You can lint, test, build, serve (and more) applications / libraries. Check `nx --help` for further help.

Common commands are also runnable through npm:

```bash
npm run start
npm run test
npm run e2e
npm run lint
```

---

# 🌟 My skills summary

## Frontend Technologies:
- Angular
- TypeScript
- JavaScript
- RxJS
- NgRX
- PrimeNg
- KendoUI
- Bootstrap
- CSS & SASS
- Jest
- Cypress

## Backend Technologies:
- PHP
- Symfony
- Yii & Yii2
- NestJS
- REST
- Websockets
- RabbitMQ
- PostgreSQL
- MySQL

## Software Development Practices:
- SOLID
- KISS
- DRY
- CleanCode
- TDD
- OOP

## DevOps & Tools:
- Docker
- Kubernetes
- GIT (GitLab, GitHub)
- SonarCube
- Apache
- NGiNX
- Linux
- Windows
