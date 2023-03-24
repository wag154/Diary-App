const bcrypt = require('bcrypt')
const User = require('../Models/User')
const Token = require('../Models/Token')

async function index(req, res){
    try {
        const users = await User.getAll()
        res.json(users)
    } catch (err) {
        res.status(500).json({"error": err.message})
    }
}

async function register (req, res) {
    try {
        const data = req.body
        const salt = await bcrypt.genSalt(parseInt(process.env.SALT_ROUNDS))
        data["password"] = await bcrypt.hash(data['password'], salt)
        const result = await User.create(data)
        res.status(201).send(result)
    } catch(err) {
        res.status(400).json({"error": err.message})
    }
};

async function login (req, res) {
    const data = req.body
    try{
        const user = await User.getOneByName(data.Username)
        const authenticated = await bcrypt.compare(data.Password, user["password"])
        if (!authenticated) {
            throw new Error('Incorrect details')
        } else {
            const token = await Token.create(user['id'])
            res.status(200).json({"Authenticated": true, "token": token.token})
        }
    } catch (err) {
        res.status(403).json({"error": err.message})
    }
}

module.exports = { index, register, login }