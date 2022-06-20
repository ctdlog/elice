const User = require("../models/user");

module.exports.insertUser = async (user) => {
  try {
    const result = await User.create(user);
    return { message: "OK", data: result };
  } catch (err) {
    return { message: err };
  }
};

module.exports.auth = async (user) => {
  try {
    // 값이 없으면 null
    const result = await User.findOne({ email: user.email });
    if (result) {
      if (await result.isValidPassword(user.password)) {
        return { message: "OK", data: result };
      } else {
        return { message: "비밀번화가 틀립니다." };
      }
    } else {
      return { message: "등록되지 않은 이메일 입니다." };
    }
  } catch (err) {
    return { message: err };
  }
};
