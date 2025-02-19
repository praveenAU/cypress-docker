# UI Automation with Cypress

Cypress Demo Repo

## Cypress Installation

1. Install [Node.js](https://nodejs.org/en/)

2. Install all dependencies by entering

```sh
npm install
```

## Test Execution

To open Cypress test runner, type:

```sh
npm test
```

After a moment, the Cypress Test Runner will launch. Click on the JS file to run tests.

## Docker Support

Cypress now provides a Docker image with Cypress pre-installed. So with a one single command it's possible to run the tests. To run tests, type:

```sh
docker build -t cypress-docker .
 ```

This will pull the image `cypress/included:3.2.0` and will execute the tests. Once successful, your terminal will look like below.

![alt text](https://user-images.githubusercontent.com/8067357/58853536-079b7100-86de-11e9-8570-52d9b4d45a95.png)

## More info on Cypress

* <https://cypress.io/>
* <https://example.cypress.io/>
* <https://www.cypress.io/blog/2019/05/02/run-cypress-with-a-single-docker-command/>
