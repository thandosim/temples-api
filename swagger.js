
const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Temples API',
    description: 'LDS Temple API documentation for BYU-Idaho WDD230'
  },
  host: 'localhost:8080',
  schemes: ['http']
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./index.js']; // or wherever your routes are defined

swaggerAutogen(outputFile, endpointsFiles, doc);
