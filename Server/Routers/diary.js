const {Router} = require('express');
const authenticator = require("../middleware/authenticator")
const diaryController = require('../Controllers/diary')
const diaryRouter = Router()

diaryRouter.get("/", diaryController.index);
// diaryRouter.get("/:id", diaryController.show);
diaryRouter.post("/", diaryController.create);
// diaryRouter.delete("/:id", diaryController.destroy);
// diaryRouter.patch("/:id", diaryController.update);

module.exports = diaryRouter;