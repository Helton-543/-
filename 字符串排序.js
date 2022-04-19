let line = parseInt(readline());

let arr = [];
for (let i = 0; i < line; i++) {
  arr.push(readline());
}
arr.sort();
arr.forEach((item) => {
  console.log(item);
});
