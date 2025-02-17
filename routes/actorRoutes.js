const express = require("express");
const router = express.Router();
const ActorController = require("../controllers/actorController");

// 배우 전부 가져오기를 하는 라우터
router.get("/", ActorController.getAllActor);
router.get("/man", ActorController.getManActor);
router.get("/woman", ActorController.getWomanActor);
router.get("/sameAct", ActorController.getSameActor);
router.get("/movie", ActorController.getMovieActor);
router.get("/drama", ActorController.getDramaActor);

module.exports = router;
