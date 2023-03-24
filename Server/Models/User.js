const db = require('../database/connect')

class User {
    constructor({ user_id, name, password}) {
        this.id = user_id;
        this.name = name;
        this.password = password;
    }

    static async getOneById(id) {
        const response = await db.query("SELECT * FROM user WHERE user_id = $1", [id])
        if (response.rows.length != 1) {
            throw new Error("Unable to locate user.")
        }
        return new User(response.rows[0])
    }

    static async getOneByName(name) {
        const response = await db.query("SELECT * FROM user WHERE name = $1", [name])
        if (response.rows.length != 1) {
            throw new Error("Unable to locate user.")
        }
        return new User(response.rows[0])
    }

    static async create(data) {
        const { name, password } = data
        let response = await db.query("INSERT INTO user (name, password) VALUES ($1, $2) RETURNING user_id;", [name, password])
        const newId = response.rows[0].user_id
        const newUser = await User.getOneById(newId)
        return newUser
    }

}

module.exports = User;