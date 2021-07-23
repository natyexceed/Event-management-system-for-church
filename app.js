const express = require('express');

const app = express();

// Routes

app.use("/", require("./routes/api/eventsRoutes"));

module.exports = app;