const express = require('express');
const models = require('./models');
const expressGraphQL = require('express-graphql').graphqlHTTP;
const mongoose = require('mongoose');
const schema = require('./schema/schema');
const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.dev.js');

const app = express();

// MONGODB
const MONGO_URI = '';

if (!MONGO_URI) {
  throw new Error('You must provide a Mongodb URI');
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI);
mongoose.connection
  .once('open', () => console.log('Connected to MongoDB instance.'))
  .on('error', error => console.log('Error connecting to MongoLab:', error));

app.use(express.json());

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;
