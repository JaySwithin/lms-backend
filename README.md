# Simple Loan Management System

## Prerequisites

Before running the application, ensure that the following software is installed on your system:

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your local machine.
- [PostgreSQL](https://www.postgresql.org/) database installed and running.

## Getting Started

To set up and run the application, follow these steps:

1. cd into the root folder

2. Install the dependencies
```
npm install
```


2. Configure the database connection:

   Open the `config` folder located in the root directory and open the `config.json` file. Update the following properties with your PostgreSQL database information:
   ```bash
   spring:
    ...
    ...
   "development": {
    "username": "your_postgres_username",
    "password": "your_postgres_password",
    "database": "database_name",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },

3. Generate the database tables by running:
```
npm run migrate
```

4. Generate test data for the admin table.
This helps us to authenticate and authorize the user.
Run this command:
```
npm run seed
```

5. Create a .env file similar to the env.example provided in the root directory.

-It should look like this:
```
ACCESS_TOKEN_SECRET=XXXXXX
REFRESH_TOKEN_SECRET=XXXXXX
```
You can generate the two secrets by using these commands in your terminal:
```
node
```
to start the REPL env, then:
```
require("crypto").randomBytes(64).toString("hex")
```
twice to generate two secrets.



6. Run the application
   ```
   npm run start
   ```


The application will start running on `http://localhost:8000`.
