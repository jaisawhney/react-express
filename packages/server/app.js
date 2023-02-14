const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const rabbitRoutes = require('./routes/rabbits');
app.use('/rabbits', rabbitRoutes);

const port = process.env.port || 4000;
app.listen(port, () => console.log(`Listening on port ${port}`));
