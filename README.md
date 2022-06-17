# Bettah

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

insert link here for trello?

## MVP and designs

## Team Approach



### User Stories

#### Login

```
As a user, 

```
```
As a user, 

```
```
As a user, 

```
```
As a user,

```
#### Posts

```
As a user, 

```
```
As a user, 

```
```
As a user, 

```
```
As a user, 

```
```
As a user,

```

#### Interactions

```
As a user,

```
```
As a user, 

```
### Further User Stories

```
As a user, 

```
```
As a user, 

```
## Future Improvements

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
