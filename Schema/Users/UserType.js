var graphql = require('graphql');
// Define the User type
const userType = new graphql.GraphQLObjectType({
    name: 'User',
    fields: {
      id: { type: graphql.GraphQLString },
      name: { type: graphql.GraphQLString },
    }
  });

  module.exports = userType;