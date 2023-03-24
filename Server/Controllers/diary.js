const Diary = require("../Models/Diary.js");

// async function index(req, res){
//     try {
//         const id = await getUserId();
//         const diaries = await Diary.getAllByUserId(id);
//     }
//     catch {(e) = console.log("Failed to get user id")}

// }

async function index(req, res) {
    try {
        const diaries = await Diary.getAll()
        res.json(diaries)
    } catch (err) {
        res.status(500).json({"error": err.message})
    }
}

async function create(req, res){
    try {
        const data = req.body;
        const result = await Diary.create(data);
        res.status(201).send(result);
    } catch(err) {
        res.status(400).json({"error": err.message})
    }
};

module.exports = {index, create};