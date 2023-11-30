const express = require("express") 
const router = express.Router() 

const { register } = require("../controller/userCtrl") 

const { login } = require("../Auth/auth") 

router.route("/register").post(register);

router.route("/login").post(login); 
module.exports = router;