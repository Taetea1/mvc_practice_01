const express = require("express");
const router = express.Router();
const ActorController = require("../controllers/actorController");

// 배우 전부 가져오기를 하는 라우터
router.get("/", ActorController.getAllActor);
router.get("/man", ActorController.getManActor);

module.exports = router;
