const num = readline();
let num1 = [];
for (let index = 0; index < parseInt(num); index++) {
  num1.push(readline());
}
let num2 = [...new Set(num1)];
num2.sort((a, b) => {
  return a - b;
});
num2.forEach((item) => {
  console.log(item);
});
