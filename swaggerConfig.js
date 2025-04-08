const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Chaos Web Management System API",
      description: "API documentation for the Chaos Web Management System",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://10.28.69.8:80",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
