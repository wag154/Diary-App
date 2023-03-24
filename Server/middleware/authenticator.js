const Token = require("../Models/Token");

async function authenticator(req, res, next) {
    try {
        const userToken = req.headers["authorisation"];

        if (userToken == "null") {
            throw new Error("User not authenticated");
        } else {
            const validToken = await Token.getOneByToken(userToken);
            next();
        }
    } catch (err) {
        res.status(403).json({error: err.message });
    }
}

module.exports = authenticator;