node-mysql-crud-app
In this repo I have created the restful api using nodejs, express and mysql


Need Xampp,Heidi sql.

MySQL configuration

Please create database and make the changes in the config/db.config.js file.

In the project directory, you can run:

### `npm install`
This will install the dependencies inside node_modules

### `npm install express body-parser mysql --save`

This will install the dependencies.

### `npm install --save-dev nodemon`

This will install the DevDependencies.

"start": "node server"
Add this line inside script in package.json file.


### `node server.js` OR `nodemon start` OR `npm start`
Runs the app in the development mode.
Open http://localhost:5000 to view it in the browser.

Swagger-ui is used for make crud operations(instead of FrontEnd)

http://localhost:3000/api-docs


References:-

https://github.com/rahulguptafullstack/node-mysql-crud-app/tree/master

https://medium.com/@rahulguptalive/create-crud-apis-in-nodejs-express-and-mysql-abda4dfc2d6
