// var mysql = require("mysql");
// // var client = mysql.createConnection({
// //   host: "127.0.0.1",
// //   user: "root",
// //   password: "Admin@1234",
// //   database: "kalpas",
// // });
// const connectUserdb = () => {
//   var client = mysql.createPool({
//     connectionLimit: 20,
//     host: "127.0.0.1",
//     user: "root",
//     password: "Admin@1234",
//     database: "kalpas",
//   });
//   return client;
// };

// // client.connect((err) => {
// //   if (err) {
// //     console.log("Error occurred", err);
// //   } else {
// //     console.log("Connected to MySQL Server");
// //   }
// // });

// module.exports = { connectUserdb };

let mysql = require("mysql");
const connectUserdb = () => {
  var client = mysql.createConnection({
    port: 3306,
    host: "127.0.0.1",
    user: "root",
    password: "Admin@1234",
    database: "kalpas",
  });
  client.connect();
  return client;
};

module.exports = { connectUserdb };
