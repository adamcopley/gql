var userType = require('./Users/UserType');

var graphql = require('graphql');

const UserModel = require('../Models/User/UserModel');

const queryType = new graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
      user: {
        type: userType,
        // `args` describes the arguments that the `user` query accepts
        args: {
          id: { type: graphql.GraphQLString }
        },
        resolve: (_, {id}) => {
          return new UserModel().getUserById(id);
        }
      }
    }
  });

  module.exports = queryType;