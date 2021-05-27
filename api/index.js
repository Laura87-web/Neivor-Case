require("colors")
const server = require("./src/server.js")
const {conn} = require("./src/DB.js")
const PORT = 3000
const MESSAGE = `- Listen in port: ${PORT} -`.magenta.bold

conn.sync().then(()=>{
    server.listen( PORT,()=>{
        console.log(MESSAGE)
    })
})