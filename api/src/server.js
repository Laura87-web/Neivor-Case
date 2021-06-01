
const express = require("express")
const morgan = require("morgan")
const cors = require('cors');
const fileUpload = require('express-fileupload')


const server = express()
const routes = require("./routes")

server.use(cors());
server.use(express.json());
server.use(morgan("dev"))
server.use(fileUpload())
server.use("/", routes)

module.exports = server