# Project Management Module Documentation

## Overview

This is a project management software that is part of an Enterprise Resource Planning (ERP) system named Enterleaf. The software's frontend is developed using ReactJS and Vite, incorporating several popular technologies to ensure a robust and scalable application.

## Table of Contents

- [Project Management Module Documentation](#project-management-module-documentation)
  - [Overview](#overview)
  - [Table of Contents](#table-of-contents)
  - [Technologies Used](#technologies-used)
  - [Project Setup](#project-setup)
  - [Folder Structure](#folder-structure)
  - [Available Scripts](#available-scripts)
  - [Development Tools](#development-tools)
    - [Storybook](#storybook)
    - [ESLint](#eslint)
  - [Internationalization](#internationalization)
  - [State Management](#state-management)
  - [Form Validation](#form-validation)
  - [Mock Database and Server](#mock-database-and-server)
  - [Conclusion](#conclusion)

## Technologies Used

- **ReactJS**: A JavaScript library for building user interfaces.
- **Vite**: A build tool that provides a fast development environment.
- **Typescript**: A superset of JavaScript that adds static types.
- **TailwindCSS**: A utility-first CSS framework.
- **Shadcn**: Component library for React.
- **AG Grid Table**: A feature-rich data grid.
- **Storybook**: A tool for UI component development and testing.
- **ESLint**: A tool for identifying and reporting on patterns in JavaScript.
- **Start-fake-server**: A full fake REST API for development.
- **i18n**: Internationalization framework for React.
- **Redux Toolkit**: A toolset for efficient Redux development.
- **Redux Toolkit Query**: A powerful data fetching and caching tool.
- **Zod**: A TypeScript-first schema declaration and validation library.

## Project Setup

To set up the project, follow these steps:

1. **Clone the repository:**

   \`\`\`sh
   git clone <repository_url>
   cd project-management-module
   \`\`\`

2. **Install dependencies:**

   \`\`\`sh
   npm install
   \`\`\`

3. **Start the development server:**

   \`\`\`sh
   npm run dev
   \`\`\`

## Folder Structure

The project follows a standard React project structure:

\`\`\`
project-management-module/
├── public/
├── src/
│ ├── assets/
│ ├── components/
│ ├── features/
│ ├── hooks/
│ ├── layouts/
│ ├── pages/
│ ├── services/
│ ├── store/
│ ├── styles/
│ ├── types/
│ ├── utils/
│ ├── App.tsx
│ ├── index.tsx
│ └── ...
├── .eslintrc.js
├── package.json
├── tailwind.config.js
└── ...
\`\`\`

## Available Scripts

In the project directory, you can run the following scripts:

- **\`npm run dev\`**: Starts the development server.
- **\`npm run build\`**: Builds the app for production.
- **\`\`**: Press ALT + X to run frontend and fake backend server at once.
- **\`npm run lint\`**: Runs ESLint to check for code quality issues.
- **\`npm run storybook\`**: Starts Storybook for UI component development.
- **\`npm run start-fake-server\`**: Starts the Fake Server for the mock database and server.

## Development Tools

### Storybook

Storybook is used for developing UI components in isolation. To start Storybook, run:

\`\`\`sh
npm run storybook
\`\`\`

### ESLint

ESLint is configured to ensure code quality. To run ESLint, use:

\`\`\`sh
npm run lint
\`\`\`

## Internationalization

The application uses \`i18n\` for internationalization. Language files are located in the \`src/i18n\` directory. To change the language, update the \`i18n\` configuration.

## State Management

Redux Toolkit is used for state management. The global store is configured in \`src/store\`. For API calls, Redux Toolkit Query is used, which is set up in \`src/services\`.

## Form Validation

Zod is used for form validation. Schemas are defined in the \`src/schemas\` directory and used in form components to validate user input.

## Mock Database and Server

Start-fake-server is used to provide a mock REST API for development purposes. The mock database is defined in \`db.json\` at the root of the project. To start the Start-fake-server, run:

\`\`\`sh
npm run start-fake-server
\`\`\`

## Conclusion

This documentation provides an overview of the Project Management project, including the technologies used, project setup instructions, and key development tools. For more detailed information, please refer to the specific documentation of each technology and tool used in the project.
