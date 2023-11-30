const User = require("../model/user")
const bcrypt = require("bcryptjs")
// auth.js
exports.register = async (req, res, next) => {
  const { username, password } = req.body;
  bcrypt.hash(password, 10).then(async (hash) => {
    await User.create({
      username,
      password: hash,
    })
      .then((user) =>
        res.status(200).json({
          message: "User successfully created",
           user,
        })
      )
      .catch((error) =>
        res.status(400).json({
          message: "User not successful created",
          error: error.message,
        })
      );
  });
};
  // auth.js
exports.login = async (req, res, next) => {
    const { email, password } = req.body
    // Check if username and password is provided
    if (!email || !password) {
      return res.status(400).json({
        message: "Username or Password not present",
      })
    }
    try {
        const user = await User.findOne({ email, password })
        if (!user) {
          res.status(401).json({
            message: "Login not successful",
            error: "User not found",
          })
        } else {
          res.status(200).json({
            message: "Login successful",
            user,
          })
        }
      } catch (error) {
        res.status(400).json({
          message: "An error occurred",
          error: error.message,
        })
      }
      //auth.js
exports.update = async (req, res, next) => {
    const { role, id } = req.body
    // Verifying if role and id is presnt
    if (role && id) {
      // Verifying if the value of role is admin
      if (role === "admin") {
        await User.findById(id)
      } else {
        res.status(400).json({
          message: "Role is not admin",
        })
      }
    } else {
      res.status(400).json({ message: "Role or Id not present" })
    }
  }
}

