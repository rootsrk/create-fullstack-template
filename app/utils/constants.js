require('dotenv').config();

const port = process.env.PORT || 5000;
const URL = process.env.URL;

module.exports = { port, URL };
