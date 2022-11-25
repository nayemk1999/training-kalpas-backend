const { gql } = require("apollo-server-express");
const typeDefs = gql`
  scalar Timestamp
  type User {
    id: ID!
    firstName: String
    lastName: String
    phoneNumber: String
    email: String
    country: String
    status: String
    createAt: Timestamp
  }

  input AddUser {
    firstName: String
    lastName: String
    phoneNumber: String
    email: String
    country: String
    status: String
  }
  type Response {
    success: Boolean!
    message: String!
  }

  type Query {
    getAllUsers(limit: Int, page: Int, filter: String): [User]
    getUser(id: String!): User
  }
  type Mutation {
    addUser(user: AddUser): Response
    deleteUser(id: String!): Response
  }
`;

module.exports = {
  usersTypeDefs: typeDefs,
};
