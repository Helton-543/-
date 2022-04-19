const month = readline();
console.log(getSum(month));

function getSum(month) {
  if (month < 3) {
    return 1;
  } else {
    return getSum(month - 1) + getSum(month - 2);
  }
}
