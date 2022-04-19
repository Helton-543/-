const num = parseInt(readline());
let str = num.toString(2);
let arr = str.split("").filter((item) => {
  return item == "1";
});
console.log(arr.length);
