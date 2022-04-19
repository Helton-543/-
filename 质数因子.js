let num = parseInt(readline());
let arr = [];
let i = 2;
while (i <= num && i * i <= num) {
  if (num % i === 0) {
    arr.push(i);
    num /= i;
    i = 2;
  } else {
    i++;
  }
}

if (num != 1) {
  arr.push(num);
}

console.log(`${arr}`.replace(/,/g, " "));
