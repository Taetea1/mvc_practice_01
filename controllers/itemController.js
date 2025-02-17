const itemModel = require("../models/itemModel");

// 전체 리스트 가져오는 컨트롤러
const getItems = (req, res) => {
  const items = itemModel.getAllItem();
  res.render("items/index", { items });
};

// 특정 아이디 가져오기
const getItem = (req, res) => {
  const item = itemModel.getItemById(req.params.id);
  if (item) {
    res.render("items/show", { item });
  } else {
    res.statusCode = 404;
    return res.send("해당하는 아이템이 없습니다.");
  }
};

// 가장 비싼 물건 가져오기
const getPrice = (req, res) => {
  const highPriceItem = itemModel.getHighPrice();
  res.render("items/high", { highPriceItem });
};

module.exports = { getItems, getItem, getPrice };
