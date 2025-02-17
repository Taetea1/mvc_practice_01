const express = require("express");
const app = express();
const port = 3000;

// 라우팅 파일 불러오기
const userRouters = require("./routes/userRoutes");
const itemRouters = require("./routes/ItemRoutes");
const actorRouters = require("./routes/actorRoutes");

// body-parser
// x-www-form-urlencoded 방식, 객체 형태로 결과가 나옴(객체형태: {})
app.use(express.urlencoded({ extended: true }));
// json
app.use(express.json());
app.use("/public", express.static("public"));

// users경로에 대한 라우팅 처리(/users경로로 들어감)
app.use("/users", userRouters); // '/users'에 대한 요청은 userRoutes로 처리
app.use("/items", itemRouters);
app.use("/actors", actorRouters);

app.set("view engine", "ejs");
app.set("views", "./views");

// 기본 홈 라우트
app.get("/", (req, res) => {
  res.render("index", { title: "MVC 패턴" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
