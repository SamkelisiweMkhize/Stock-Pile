const express = require("express") 
const router = express.Router() 
const { register, login } = require("../controller/userCtrl") 

// router.route("/update").put(update); 
router.route("/register").post(register);
// router.route("/login").post(login); 
module.exports = router;