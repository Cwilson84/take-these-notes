const express = require("express");
const db = require(".develop/db");
const path = require("path");

const server = express();
const PORT = process.env.PORT || 3001;

const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

server.use(express.json());
server.use(express.static("public"));
server.use(
  express.urlencoded({
    extended: true,
  })
);

server.use("/api", apiRoutes);
server.use("/", htmlRoutes);
server.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
