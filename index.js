const express = require("express");
const app = express();
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const Schema = require("./src/graphql/schema");
const { client } = require("./src/db/db");
const { ApolloServer } = require("apollo-server-express");
const { config } = require("./src/graphql/config/config");
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

// client.connect()

app.get("/", (req, res) => res.send("Hello World!"));

const server = new ApolloServer(config);

server.start().then((res) => {
  server.applyMiddleware({ app, path: "/graphql" });
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
});
