const express = require('express');
const router = require('./router');
require('dotenv').config();
const PORT = process.env.PORT || 3333;

const app = express();

app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`server is running ${PORT}`));

module.exports = app;