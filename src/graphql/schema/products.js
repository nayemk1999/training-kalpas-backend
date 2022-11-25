const { gql } = require("apollo-server-express");
const typeDefs = gql`
  type Product {
    id: ID!
    image: String
    price: String
    discount: String
    stock: String
    category: String!
    sell: String
    postedby: String
    title: String
    status: String
  }
  input AddProduct {
    image: String
    price: String
    discount: String
    stock: String
    category: String!
    sell: String
    postedby: String
    title: String
    status: String
  }
  type Response {
    success: Boolean!
    message: String!
  }

  type Query {
    getAllProducts(limit: Int, page: Int, filter: String): [Product]
    getProduct(id: String!): Product
  }
  type Mutation {
    addProduct(product: AddProduct): Response
    deleteProduct(id: String!): Response
  }
`;

module.exports = {
  productsTypeDefs: typeDefs,
};
