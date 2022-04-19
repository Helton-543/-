function sliceStr(strs = readline()) {
  const num = Math.ceil(strs.length / 8);
  const baseZero = "00000000";
  for (let index = 0; index < num; index++) {
    let str = strs.slice(index * 8, index * 8 + 8);
    if (str.length < 8) {
      str += baseZero.slice(0, 8 - str.length);
    }
    console.log(str);
  }
}
sliceStr();
