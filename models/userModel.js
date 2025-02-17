// 데이터 모델 만들거임//

// 간단한 데이터 모델 생성(db있으면 table이 될거임)
const users = [
  { id: 1, name: "마루", email: "maru@naver.com" },
  { id: 2, name: "강아지", email: "dog@naver.com" },
];

// 유저 데이터 전부 가지고 오기
const getAllUsers = () => {
  return users;
};

// id로 해당하는 유저 찾기
const getUserById = (id) => {
  //(매개변수 string으로 들어옴)
  return users.find((user) => user.id === parseInt(id));
};

// 다른 곳에서도 쓸 수 있게끔 내보냄(리액트에서도 내보내는거 있음)
// 해당 파일에서 만든 함수 내보내기(모듈화)
module.exports = { getAllUsers, getUserById };
