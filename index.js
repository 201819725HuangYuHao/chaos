const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swaggerConfig");

const projectRoutes = require("./routes/projectRoutes");
const scriptRoutes = require("./routes/scriptRoutes");

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api/projects", projectRoutes);
app.use("/api/scripts", scriptRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
