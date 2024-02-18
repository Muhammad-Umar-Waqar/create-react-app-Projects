const express = require('express');
const User = require('../models/User')
const router =  express.Router();


// Create a user using POST "/api/auth". Doestnot require Auth
router.get('/', (req, res)=>{
    console.log(req.body);
    // res.send("Hello");
    const user = User(req.body);
    user.save()
    res.send(req.body);
})
module.exports = router;