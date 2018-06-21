const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const index = require('./routes/index');
const userAPI = require('./routes/api/docAPI');

app.use(express.static('dist'));

app.use(bodyParser.json());
app.use(cors());

app.use('/', index);

// route everthing with '/api' at the beginning to the api files
app.use('/api', userAPI);

const dbHost = process.env.DB || 'database';
const dbPort = process.env.DBPORT || '27017';
const dbRoute = process.env.DBROUTE || 'documents';

// The name of the database after the /
const dbUrl = `mongodb://${dbHost}:${dbPort}/${dbRoute}`;

// Create connection to mongodb server
mongoose.connect(dbUrl, {
  useMongoClient: true
});

mongoose.connection.on('connected', () => {
  console.log('Connected to database');
});

mongoose.connection.on('error', (Error) => {
  console.log('Database error ', Error);
});

app.listen(8080, () => console.log('Listening on port 8080!'));
