function sleep(ms) {
  const start = Date.now();
  while (Date.now() - start < ms);
}

function getData() {
  // try - catch 에러핸들링
  // try 구분에서 에러가 발생하면
  // catch 에서 에러 핸들링
  return new Promise((resolve, reject) => {
    try {
      sleep(1000);
      const userInfo = {
        user: {
          id: "elice",
          password: "123",
        },
        createDate: "2022-04-30",
      };
      resolve(userInfo);
    } catch (err) {
      reject(err);
    }
  });
}

// data : 넘어온 userInfo 데이터
function parseValue(data) {
  return new Promise((resolve, reject) => {
    try {
      // 실제로 파싱 작업이 있음
      resolve(data.user);
    } catch (err) {
      reject(err);
    }
  });
}

function auth(user) {
  return new Promise((resolve, reject) => {
    try {
      if (user.id == "elice" && user.password == "1234") {
        resolve("ok");
      } else {
        resolve("ID 혹은 비밀번호가 틀립니다.");
      }
    } catch (err) {
      reject(err);
    }
  });
}

function display(result) {
  return new Promise((resolve, reject) => {
    if (result == "ok") {
      console.log("로그인 성공");
    } else {
      console.log(result);
    }
    resolve();
  });
}

// 유저 정보를 가져오고
getData()
  // 여기서 userInfo 데이터를 넘겨줌
  // 사용할 데이터만 파싱
  .then(parseValue)
  // 입력받은 정보와 일치하는지 확인
  .then(auth)
  // 결과를 보여주는 함수
  .then(display)
  .catch((err) => console.log(err));
