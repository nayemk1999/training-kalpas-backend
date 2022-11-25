const { productsResolver } = require("./product");
const { usersResolver } = require("./user");

const resolvers = [productsResolver, usersResolver];
module.exports = {
  resolvers,
};
