// 가져오기
const userModel = require("../models/userModel");

// 유저 전부 가져오는 컨트롤러
const getUsers = (req, res) => {
  // 전체 유저를 가지고 있음
  const users = userModel.getAllUsers();
  res.render("users/index", { users });
};

// 해당하는 유저 가져오기
const getUser = (req, res) => {
  // get요청이니까 params에 담김
  const user = userModel.getUserById(req.params.id);
  if (user) {
    // 프론트에서 보여주려면 그 데이터 던져줘야 함
    res.render("users/show", { user });
  } else {
    // 이거는 찾아서 보여주기(과제)
    res.status(404).send("해당하는 유저가 없습니다.");
  }
};

module.exports = { getUsers, getUser };
