const express = require("express");
const server = express();

const morgan = require("morgan");
const cors = require('cors');

const router = require("./routes/index");

server.use(cors());
server.use(express.json());
server.use(morgan("dev"));

server.use("/rickandmorty", router);

module.exports = server;
