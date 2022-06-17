# Bettah

![290e2f323e2e487ca498201d4d13e588](https://user-images.githubusercontent.com/101583630/174263454-e54dc317-9a3a-4f1b-afcd-0989657c2863.png)

## Contributors

* [Sam Button](https://github.com/SamButton12)
* [Gawain Hewitt](https://github.com/gawainhewitt)
* [Archie Martin](https://github.com/archiemartini)
* [Russell Morbey](https://github.com/Rmorbey)
* [Tom O'Neill](https://github.com/tomoneill32)
* [Simon Tinsley](https://github.com/sjtinsley)

## Description

This is a clone of Facebook built using the Express.js framework for Node.js, with a MongoDB database and Handlebars templates for the front end. It was a group project as part of Makers Academy and we named our website Bettah. Like Meta, but Bettah!

It uses:

- [Express](https://expressjs.com/) web framework for Node.js.
- [Nodemon](https://nodemon.io/) to reload the server automatically.
- [Handlebars](https://handlebarsjs.com/) to render view templates.
- [Mongoose](https://mongoosejs.com) to model objects in MongoDB.
- [MongoDB](https://www.mongodb.com/) our database.
- [ESLint](https://eslint.org) for linting.
- [Jest](https://jestjs.io/) for testing.
- [Cypress](https://www.cypress.io/) for end-to-end testing.
- [Javascript](https://www.javascript.com/) our coding language.
- [HTML]
- [CSS]

## Card wall

<img width="1813" alt="Screenshot 2022-06-17 at 10 51 03" src="https://user-images.githubusercontent.com/101583630/174274581-9161f027-34fc-4e2c-b8e8-c020c3299be0.png">


## MVP, design and planning

* A user can make a post on acebook.
* A user can view a post on acebook.
* A user can sign up, and then log into acebook.

<img width="888" alt="Screenshot 2022-06-17 at 09 59 40" src="https://user-images.githubusercontent.com/101583630/174265195-45871a3d-aa62-49fe-9066-d31c3e0dc607.png">

<img width="792" alt="Screenshot 2022-06-17 at 10 02 49" src="https://user-images.githubusercontent.com/101583630/174265778-1d982c97-4494-417f-84da-5a2b2e029b2e.png">

<img width="572" alt="Screenshot 2022-06-17 at 10 05 30" src="https://user-images.githubusercontent.com/101583630/174266870-9d34c4a3-3e36-426a-968b-be6ea5e01382.png">

## Team Approach

### Work hours

* Start time 10am
* Lunch 1pm - 2pm
* End day 5:30pm

### Pairing

* Breaks decided amongst pairs.

* Two pairing slots.

* Morning 10.15am - 1pm.
* Afternoon 2pm - 5:30pm.

### Daily stand ups and retros.

* Stand ups. 10am-10:15am.
* Retro. 5:30pm.

* Additional Stand ups before or after lunch for planning and estimation of tickets. When needed.

<img width="1087" alt="Screenshot 2022-06-17 at 10 39 48" src="https://user-images.githubusercontent.com/101583630/174272716-2c4f875b-1bb6-43cb-a30e-d083e975857b.png">

## Demo Photos

### Home page / Login Page
<img width="1265" alt="Screenshot 2022-06-17 at 13 45 52" src="https://user-images.githubusercontent.com/101583630/174303217-f05435f3-6422-43a3-9345-1db0faa9cfc4.png">

### Sign up Page (Modal)
<img width="1267" alt="Screenshot 2022-06-17 at 13 46 03" src="https://user-images.githubusercontent.com/101583630/174303290-1a7ab547-fe90-48e5-ac21-ceeb1a5ae9f1.png">

### Timeline
<img width="1264" alt="Screenshot 2022-06-17 at 13 52 32" src="https://user-images.githubusercontent.com/101583630/174303061-ec791370-eb1f-4e17-90ca-3da5d67aa24c.png">

## Future Improvements

* Users can friend each other.
* Use cloud server for database
* Deploy website on Heroku

## Quickstart

### Install Node.js

1. Install Node Version Manager (NVM)
   ```
   brew install nvm
   ```
   Then follow the instructions to update your `~/.bash_profile`.
2. Open a new terminal
3. Install the latest version of [Node.js](https://nodejs.org/en/), currently `18.1.0`.
   ```
   nvm install 18
   ```

### How to run locally

1. Fork this repository
2. Clone your fork to your local machine
3. Install Node.js dependencies
   ```
   npm install
   ```
4. Install MongoDB
   ```
   brew tap mongodb/brew
   brew install mongodb-community@5.0
   ```
5. Start MongoDB
   ```
   brew services start mongodb-community@5.0
   ```

### Start

1. Start the server
   ```
   npm start
   ```
2. Browse to [http://localhost:3000](http://localhost:3000)

#### Start test server

The server must be running locally with test configuration for the
integration tests to pass.

```
npm run start:test
```

This starts the server on port `3030` and uses the `acebook_test` MongoDB database,
so that integration tests do not interact with the development server.

### Test

- Run all tests
  ```
  npm test
  ```
- Run a check
  ```bash
  npm run lint              # linter only
  npm run test:unit         # unit tests only
  npm run test:integration  # integration tests only
  ```

## MongoDB Connection Errors?

Some people occasionally experience MongoDB connection errors when running the tests or trying to use the application. Here are some tips which might help resolve such issues.

- Check that MongoDB is installed using `mongo --version`
- Check that it's running using `brew services list`
