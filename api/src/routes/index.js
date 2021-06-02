const { Router } = require('express');
const matchSearch = require("./matchSearch")

const router = Router()

router.post("/match", matchSearch)
router.post("/upload", (req, res)=>{
    console.log("excel req", req.files)
    let data;
    let name;
    for(let key in req.files){
        data = req.files[key].data.toJSON("utf-8")
        name = req.files[key].name
    }

    console.log(data)
    res.send(`"el archivo " ${name} "se agrego"` )
})


module.exports = router; 