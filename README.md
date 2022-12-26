# Reaktor Birdnest

## About the project

This monorepo contains apps and packages for creating a fullstack web application, which display information about pilots,
who breach no drone area.
Done as a [pre-assignment](https://assignments.reaktor.com/birdnest/) for Reaktor 2023 summer internship.

## Project Structure

    .
    ├── apps
    │   ├── nextjs-app      # Fullstack web application, created with Next.js
    │   ├── backend-app     # Backend service, which runs on background and collects drones
    │   └── prisma          # Prisma ORM Database Schema
    ├── packages
    │   ├── types           # shared types
    │   └── utils           # Shared functions
    ├── LICENSE
    └── README.md

### Prerequisites

This project uses [Yarn](https://yarnpkg.com/) as a package manager. You can install it
with [Homebrew](https://brew.sh/):

    brew install yarn

### Installation

- Clone or download the repo to your local machine
- Run `yarn` in the root folder to install dependencies
- Run `yarn prepare` to build the project
- Run `build:utils` to build the utils and types package

#### Frontend

- Run `yarn dev:frontend` to start the frontend application
- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

#### Backend

- Run `yarn dev:backend` to start the backend service

#### Prisma

This project uses [Prisma](https://www.prisma.io/) as an ORM for the database. You can install it
with [Homebrew](https://brew.sh/):

    brew install prisma

or use it with npx:

    npx prisma

##### Generate Prisma client

Run `yarn prisma:generate` to generate the prisma client

##### Database credentials

Make sure to provide the correct database credentials in the `.env` file.
Prisma uses `DATABASE_URL` environment variable to connect to the database.

## Limitations

there are some limitations in this project, which are not implemented yet:

- [ ] Add more tests
- [ ] Add Docker support
- [ ] Add CI/CD support
- [ ] Add more documentation

## Technology stack

**The following technologies and tools are to build this project:**

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/en/)
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/)
- [PostgresSQL](https://www.postgresql.org/)
- [Jest](https://jestjs.io/)
- [eslint](https://eslint.org/)
- [prettier](https://prettier.io/)
- [lerna](https://lerna.js.org/)
- [husky](https://typicode.github.io/husky/#/)
- [swr](https://swr.vercel.app/)
- [axios](https://axios-http.com/)

## License

Licensed under the MIT License, Copyright © 2021 Aleksandr Shchilkin
See [LICENSE](./LICENSE) for more information.
