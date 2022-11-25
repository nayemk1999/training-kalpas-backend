const { schema } = require("../schema/index");
const { resolvers } = require("../resolver/index");
const { DateTimeTypeDefinition, DateTimeResolver } = require("graphql-scalars");

const config = {
  typeDefs: [schema, DateTimeTypeDefinition],
  resolvers,
};
module.exports = {
  config,
};
