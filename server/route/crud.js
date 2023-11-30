const express = require("express");
const router = express.Router();

const {create,read,update, remove} = require("../Controllers/crud");

router.post("/create", create);
router.get("/items" , read);
router.put("/items/:id",update);
router.delete("/items/:id", remove)

module.exports = router;
