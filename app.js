const express = require('express')
require('dotenv').config();

const app = express()
const port = process.env.PORT || 30;

app.use(express.json());
app.use(express.urlencoded({extended : true}));

const routes = require('./routes');

app.use(routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})