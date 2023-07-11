const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerAutogen = require('swagger-autogen')();

// create express app
const app = express();
// Enable CORS for all routes
app.use(cors());
const Employee = require('./src/models/employee.model');
const EmployeeRoutes = require('./src/routes/employee.routes');
// Generate Swagger configuration

const doc = {

  info: {

    title: 'Express API Documentation',

    description: 'API documentation generated using swagger-autogen',

  },

  basePath: '/',

  schemes: ['http', 'https'],

  consumes: ['application/json'],

  produces: ['application/json'],

};
const outputFile = './swagger_output.json';

const endpointsFiles = ['./server.js'];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {

  // Configure Swagger UI

  const swaggerDocument = require('./swagger_output.json');

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

});




// Parse JSON request bodies

app.use(express.json());




// Define your routes

app.use('/api/v1/employees', EmployeeRoutes);

// Start the server

const port = process.env.PORT || 3000;

app.listen(port, () => {

  console.log(`Server is running on port ${port}`);

});