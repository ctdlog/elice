function convertJSON(...params) {
  if (params.length % 2 != 0) return "잘못된 파라미터 개수";

  const object = {};
  for (let i = 0; i < params.length; i += 2) {
    object[params[i]] = params[i + 1];
  }

  return JSON.stringify(object);
}

console.log(convertJSON("a", 1, "b", 2, "c", [3, 4, 5]));
