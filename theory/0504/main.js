function sleep(ms) {
  const start = Date.now();
  while (Date.now() - start < ms);
}

function getData() {
  return new Promise((resolve, reject) => {
    try {
      await sleep(1000);
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

function parseValue(data) {
  return new Promise((resolve, reject) => {
    try {
      resolve(data.user);
    } catch (err) {
      reject(err);
    }
  });
}

function auth(user) {
  return new Promise((resolve, reject) => {
    if (user.id == "elice" && user.password == "1234") {
      resolve("ok");
    } else {
      resolve("ID 혹은 비밀번호가 틀립니다.");
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



async function run() {
    try {
        const userInfo = await getData();
        const parsingData= await parseValue(userInfo)
        const authInfo = await auth(parsingData);
        await display(authInfo);
    } catch {
        (err) => console.log(err)
    }
    const a = await test();
}

run()
  
