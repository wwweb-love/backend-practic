const bcrypt = require("bcrypt")
const User = require("../models/User")
// login

    // register

async function register(login, password) {
    if (!password) {
        throw new Error("Password is empty")
    }
    const passwordHash = await bcrypt.hash(password, 10)
    const user = await User.create({ login, password: passwordHash })
    return user
}


    // logout

    // edit (role)

    // delete (user)

module.exports = {
    register
}