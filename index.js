const express = require('express');
const expressGraphQL = require('express-graphql').graphqlHTTP; // OR -> const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.use('/graphiql', expressGraphQL({ // OR -> app.use('/graphiql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(1234, () => {
  console.log('Listening...');
});
