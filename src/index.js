const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const route = require('./routes');
const database = require('./config/database');

// Connect to database
database.connect();

const app = express();
const port = 8000;

app.use(bodyParser.json({ limit: '50mb' }));
app.use(cookieParser());
app.use(cors());

// HTTP logger
app.use(morgan('common'));

// Routes
route(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
