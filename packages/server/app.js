const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

const port = process.env.port || 4000;
app.listen(port, () => console.log(`LISTENING ON PORT ${port}`));
