var userType = require('./Users/UserType');
var database = require('../database');

var graphql = require('graphql');

const UserModel = require('../Models/UserModel');

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
          return new UserModel().getUser(id);
        }
      }
    }
  });

  module.exports = queryType;