function getNum(num = readline()) {
  let arr = num.toString().split("");
  arr.reverse();
  let noRepeatArr = [];
  let noRepeatNum = 0;
  for (const iterator of arr) {
    if (noRepeatArr.indexOf(iterator) == -1) {
      noRepeatArr.push(iterator);
    }
  }
  noRepeatNum = parseInt(noRepeatArr.join(""));
  console.log(noRepeatNum);
}
getNum();
