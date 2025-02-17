// 쓴다고 명시
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// 유저 전부 가져오기를 하는 라우터(app.get했던거)(앞에 users가 앞에 있음->use로 생략함)
router.get("/", userController.getUsers);

// 해당하는 유저 가져오기를 하는 라우터(url뒤에 id가 붙어서 날라옴)
router.get("/:id", userController.getUser);

module.exports = router;
