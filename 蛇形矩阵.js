const num = readline();
const arr = [1];
for (let index = 2; index <= num; index++) {
  arr.push(arr[arr.length - 1] + index);
}
for (let index = 0; index < num; index++) {
  let str = "";
  arr.slice(index).forEach((item) => {
    str = str + (item - index) + " ";
  });
  console.log(str);
}
