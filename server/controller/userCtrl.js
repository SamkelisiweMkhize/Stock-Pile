// registering new user
const registerUser = async(req, res) => {
    try {
        res.json({data: req.body})
    } catch (error) {
        console.log(error)
        res.json(error)
    }
}



// login new user
const loginUser = async(req, res) => {
    try {
        res.json({data: req.body})
    } catch (error) {
        console.log(error)
        res.json(error)
    }
}

module.exports = {registerUser, loginUser}