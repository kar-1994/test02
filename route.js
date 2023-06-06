const express = require("express");
const router = express.Router()
const con = require("./db")
const jwt=require("jsonwebtoken");
const { validate } = require("./jwt");

let qry="SELECT * FROM auths WHERE username='ARCHANA'";


router.get("/generate/jwt", (req, res)=> {
    return res.send(jwt.sign({userName:"Devi"}, 'secretkey'));
})


router.get("/refresh/token", (req, res)=> {
    return res.send(jwt.sign({userName:"Devi"}, 'secretkey'));
})

router.get("/privateurl",validate,(req,res)=>{
    console.log(req.user);
    res.send(`Hello ${req.user.userName}`)
})
router.get("/get",validate, (req, res) => {
    con.query(qry, function (err, result) {
        if (err) throw err;
        return res.send(result)
      });
})
module.exports = {router}