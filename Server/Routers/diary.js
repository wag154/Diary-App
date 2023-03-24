const {Router} = require('express');
const authenticator = require("../middleware/authenticator")
const diaryRouter = require("../Controllers/diary.js");

diaryRouter.get("/", authenticator, diaryController.index);
diaryRouter.get("/:id", diaryController.show);
diaryRouter.post("/", diaryController.create);
diaryRouter.delete("/:id", diaryController.destroy);
diaryRouter.patch("/:id", diaryController.update);

module.exports = diaryRouter;