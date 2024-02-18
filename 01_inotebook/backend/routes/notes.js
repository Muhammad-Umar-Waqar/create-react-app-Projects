const express = require('express');
const router =  express.Router();

router.get('/', (req, res)=>{
    obj = {
        name : "Muhammad Umar",
       Roll  : 169
    }
    res.json(obj)
})
module.exports = router