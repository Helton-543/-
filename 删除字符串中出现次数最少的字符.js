let str = readline();
let result = str.split("").reduce((temp, data) => {
  temp[data] = temp[data] ? temp[data] + 1 : 1;
  return temp;
}, {});
let min = Number.MAX_SAFE_INTEGER;
for (const key in result) {
  min = Math.min(min, result[key]);
}
for (let index in result) {
  if (min == result[index]) {
    const reg = new RegExp(index, "g");
    str = str.replace(reg, "");
  }
}
console.log(str);
