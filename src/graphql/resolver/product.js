const {
  getAllProducts,
  getProduct,
  deleteProduct,
  addProductFun,
} = require("../service/dbUtilize");

const productsResolver = {
  Query: {
    getAllProducts: async (_, { limit, page, filter }, {}) => {
      return await getAllProducts(limit, page, filter);
    },
    getProduct: async (_, { id }, {}) => {
      return await getProduct(id);
    },
  },
  Mutation: {
    addProduct: async (_, { product }, {}) => {
      return await addProductFun(product);
    },
    deleteProduct: async (_, { id }, {}) => {
      return await deleteProduct(id);
    },
  },
};

module.exports = {
  productsResolver,
};
