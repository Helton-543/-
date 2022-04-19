const map = {
  abc: 2,
  def: 3,
  ghi: 4,
  jkl: 5,
  mno: 6,
  pqrs: 7,
  tuv: 8,
  wxyz: 9,
};
const reg1 = new RegExp(/[(a-z)]/g);
const capReg = new RegExp(/([A-Z])/g);
let text = readline();
text = text.replace(reg1, (a) => {
  for (const key in map) {
    if (key.indexOf(a) != -1) {
      return map[key];
    }
  }
});

text = text.replace(capReg, (a) => {
  if (a == "Z") {
    return "a";
  } else {
    return String.fromCharCode(a.toLowerCase().charCodeAt(0) + 1);
  }
});
console.log(text);
