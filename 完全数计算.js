let num;
while ((num = parseInt(readline()))) {
  let count = 0; //计数变量
  //第一个完全数是6，若小于6则输出0
  if (num < 6) {
    console.log(0);
  }
  for (let t = 6; t <= num; t++) {
    let sum = 0;
    //统计因数的和，计数到该数的1/2即可
    for (let i = 1; i <= t / 2; i++) {
      if (t % i == 0) sum += i;
    }
    if (sum == t) count++;
  }
  console.log(count);
}
