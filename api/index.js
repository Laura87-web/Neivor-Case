require("colors")
const server = require("./src/server.js")
const {conn} = require("./src/DB.js")

// server.set("port", process.env.PORT || 3001)

const PORT = 3001
const MESSAGE = `- Listen in port: ${PORT} -`.magenta.bold

server.listen( PORT ,()=>{
    console.log(MESSAGE)
})