
const express = require("express")
const morgan = require("morgan")
const cors = require('cors');

const server = express()
const routes = require("./routes")

server.use(cors());
server.use(express.json());
server.use(morgan("dev"))
server.use("/", routes)

module.exports = server