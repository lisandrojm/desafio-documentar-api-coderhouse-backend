/* ************************************************************************** */
/* /src/utils/swagger/swagger.js */
/* ************************************************************************** */

/* const path = require('path'); */
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  swaggerDefinition: {
    openapi: '3.0.1',
    info: {
      title: 'Ecommerce API',
      version: '1.0.0',
      description: 'API para administrar un ecommerce',
    },
  },
  // Utilizando path.join para construir la ruta de la carpeta "docs"
  /*   apis: [path.join(__dirname, 'src', 'docs', '**', '*.yaml')], */
  apis: ['index.js'],
};

const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };
