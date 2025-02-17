const express = require("express");
const router = express.Router();
const ItemController = require("../controllers/itemController");

// 아이템 전부 가져오기를 하는 라우터
router.get("/", ItemController.getItems);

// 해당하는 아이템 가져오기를 하는 라우터(/:id를 하면 item밑에 오는건 다 id라고 인식하기 때문에 /price에서 price를 id로 인식함 그래서 저렇게 /item 명시를 해줌->리액트에서도 저런 식으로 함(혼동이 없도록))
router.get("/item/:id", ItemController.getItem);

// 가장 비싼 아이템 가져오기를 하는 라우터
router.get("/price", ItemController.getPrice);

module.exports = router;
