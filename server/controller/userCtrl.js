const User = require("../model/user")
const Item = require("../model/stock")

// login function

exports.login = async (req, res, next) => {
  const { email, password } = req.body
  // Check if email and password is provided
  if (!email || !password) {
    return res.status(400).json({
      message: "email or Password not present",
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
        user: {
          name: user.name,
          email: user.email,
          _id: user._id
        }
      })
    }
  } catch (error) {
    res.status(400).json({
      message: "An error occurred",
      error: error.message,
    })
  }
}


exports.register = async (req, res, next) => {
  const { name, email, password } = req.body
  if (password.length < 6) {
    return res.status(400).json({ message: "Password less than 6 characters" })
  }
  try {
    await User.create({
      name,
      email,
      password,
    }).then(user =>
      res.status(200).json({
        message: "User successfully created",
        user,
      })
    )
  } catch (err) {
    res.status(401).json({
      message: "User not successful created",
      error: err.mesage,
    })
  }

}





// Create an item // 
exports.create = async (req, res) => {
  try {
    const {name, description} = req.body

    if(!name || !description) {
      res.status(400)
      res.status(400).json({ message: "name and description cannot be empty" });
    }

    const newItem = new Item({name, description});
    await newItem.save();

    const items = await Item.find();
    res.json(items);

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

//read all the items//

exports.read = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

//Update an specific item// 


exports.update = async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

//delete//

exports.remove = async (req, res) => {

  try {
    await Item.findByIdAndDelete(req.params.id);

    const items = await Item.find();
    res.json(items);

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}


