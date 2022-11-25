// const { GraphQLSchema } = require("graphql");
// const { Mutations } = require("../mutation/mutation");
// const { RootQuery } = require("../query/query");

const { productsTypeDefs } = require("./products");
const { usersTypeDefs } = require("./user");

// const Schema = new GraphQLSchema({
//   query: RootQuery,
//   mutation: Mutations,
// });

// module.exports = Schema;

const schema = [productsTypeDefs, usersTypeDefs];
module.exports = {
  schema,
};
