let num = parseInt(readline());
for (let i = num / 2; i < num; i++) {
  let j = num - i;
  if (isPrime(i) && isPrime(j)) {
    console.log(j + "\n" + i);
    break;
  }
}

function isPrime(num) {
  if (num >= 2) {
    for (let i = 2; i < Math.ceil(num / 2); i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}
