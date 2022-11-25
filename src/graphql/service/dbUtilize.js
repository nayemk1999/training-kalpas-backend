const producs_data = require("../../db/products.json");
const { connectUserdb } = require("../../db/db");

const db = connectUserdb();

async function getAllProducts(limit, page, filter) {
  try {
    let products = new Promise((resolve, reject) => {
      let sql = `SELECT * FROM products limit ${limit} offset ${page}`;
      db.query(sql, (err, result) => {
        resolve(JSON.parse(JSON.stringify(result)));
      });
    });
    return products;
  } catch (error) {
    return (response = {
      success: false,
      message: "Something went wrong! Please try again.",
    });
  }
}

async function getProduct(id) {
  try {
    let product = new Promise((resolve, reject) => {
      let sql = `SELECT * FROM products WHERE id=${id}`;
      db.query(sql, (err, result) => {
        resolve(result[0]);
      });
    });
    return product;
  } catch (error) {
    return (response = {
      success: false,
      message: "Something went wrong! Please try again.",
    });
  }
}

async function deleteProduct(id) {
  try {
    let product = new Promise((resolve, reject) => {
      let sql = `DELETE FROM products WHERE id=${id}`;
      db.query(sql, (err, result) => {
        resolve(result[0]);
      });
    });
    if (product) {
      return (response = {
        success: true,
        message: "Deleted This Product.",
      });
    }
  } catch (error) {
    return (response = {
      success: false,
      message: "Something went wrong! Please try again.",
    });
  }
}

async function addProductFun(value) {
  try {
    let addProduct = new Promise((resolve, reject) => {
      let sql = `INSERT INTO ${`products`} (${"image"}, ${`price`}, ${`discount`}, ${`stock`}, ${`category`}, ${`sell`}, ${`postedby`}, ${`title`}, ${`status`}) VALUES ('${
        value.image
      }', '${value.price}', '${value.discount}', '${value.stock}', '${
        value.category
      }', '${value.sell}', '${value.postedby}', '${value.title}', '${
        value.status
      }' )`;
      db.query(sql, (err, result) => {
        resolve(result);
      });
    });

    if (addProduct) {
      return (response = {
        success: true,
        message: "Succssfully added .",
      });
    }
  } catch (error) {
    return (response = {
      success: false,
      message: "Something went wrong! Please try again.",
    });
  }
}

async function getAllUsers(limit, page, filter) {
  try {
    let users = new Promise((resolve, reject) => {
      let sql = `SELECT * FROM users limit ${limit} offset ${page}`;
      db.query(sql, (err, result) => {
        resolve(JSON.parse(JSON.stringify(result)));
      });
    });
    return users;
  } catch (error) {
    return (response = {
      success: false,
      message: "Something went wrong! Please try again.",
    });
  }
}

async function getUser(id) {
  try {
    let user = new Promise((resolve, reject) => {
      let sql = `SELECT * FROM users WHERE id=${id}`;
      db.query(sql, (err, result) => {
        resolve(result[0]);
      });
    });
    return user;
  } catch (error) {
    return (response = {
      success: false,
      message: "Something went wrong! Please try again.",
    });
  }
}

async function deleteUser(id) {
  try {
    let user = new Promise((resolve, reject) => {
      let sql = `DELETE FROM users WHERE id=${id}`;
      db.query(sql, (err, result) => {
        resolve(result[0]);
      });
    });
    if (user) {
      return (response = {
        success: true,
        message: "Deleted This user.",
      });
    }
  } catch (error) {
    return (response = {
      success: false,
      message: "Something went wrong! Please try again.",
    });
  }
}

async function addUser(value) {
  try {
    let addUser = new Promise((resolve, reject) => {
      let sql = `INSERT INTO ${`users`} (${"firstName"}, ${`lastName`}, ${`phoneNumber`}, ${`email`}, ${`country`}, ${`status`}) VALUES ('${
        value.firstName
      }', '${value.lastName}', '${value.phoneNumber}', '${value.email}', '${
        value.country
      }', '${value.status}' )`;
      db.query(sql, (err, result) => {
        resolve(result);
      });
    });

    if (addUser) {
      return (response = {
        success: true,
        message: "Succssfully added .",
      });
    }
  } catch (error) {
    return (response = {
      success: false,
      message: "Something went wrong! Please try again.",
    });
  }
}

module.exports = {
  getAllProducts,
  getProduct,
  deleteProduct,
  addProductFun,
  getAllUsers,
  getUser,
  addUser,
  deleteUser,
};
