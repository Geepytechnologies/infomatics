const express = require('express');
const app = express()
const router = express.Router();
const card = require('../models/card');

router.get("/", (req,res)=>{
    var name = 'i am here';
    res.render("index",{
        name: name,
    });
});

module.exports = router;
