const { Router } = require('express');
const router = Router();

router.use("/", (req, res)=>{
    res.send("<h1>estas en la pag pral</h1>")
})
router.use("/search", (req, res)=>{

});

module.exports = router; 