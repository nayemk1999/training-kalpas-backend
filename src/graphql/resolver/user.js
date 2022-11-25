const {
  getAllUsers,
  getUser,
  addUser,
  deleteUser,
} = require("../service/dbUtilize");

const usersResolver = {
  Query: {
    getAllUsers: async (_, { limit, page, filter }, {}) => {
      return await getAllUsers(limit, page, filter);
    },
    getUser: async (_, { id }, {}) => {
      return await getUser(id);
    },
  },
  Mutation: {
    addUser: async (_, { user }, {}) => {
      return await addUser(user);
    },
    deleteUser: async (_, { id }, {}) => {
      return await deleteUser(id);
    },
  },
};

module.exports = {
  usersResolver,
};
