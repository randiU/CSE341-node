const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'CSE 341 Contacts API'
  },
  host: 'cse341-node-6216.onrender.com',
  schemes: ['https'],
  definitions: {
    Contact: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      favoriteColor: 'Blue',
      birthday: '2000-01-01'
    }
  }
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
