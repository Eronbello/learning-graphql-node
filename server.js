const app = require("express")();
const expressGraphql = require("express-graphql");
const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type User {
    id: ID
    name: String
    repo: String
    age: Int
  }
  type Query {
    user(id: ID!): User
    users: [User]
  }
  type Mutation {
    createUser(name: String!, repo: String!, age: Int!): User
  }
`);
