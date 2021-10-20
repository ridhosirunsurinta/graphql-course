const express = require('express');
const expressGraphQL = require('express-graphql').graphqlHTTP; // OR -> const { graphqlHTTP } = require('express-graphql');

const app = express();

app.use('/graphiql', expressGraphQL({ // OR -> app.use('/graphiql', graphqlHTTP({
  graphiql: true,
}));

app.listen(1234, () => {
  console.log('Listening...');
});
