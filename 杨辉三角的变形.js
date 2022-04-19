const n = Number(readline());
if (n == 1 || n == 2) {
  console.log("-1");
} else {
  if (n % 4 == 1 || n % 4 == 3) {
    console.log("2");
  } else if (n % 4 == 2) {
    console.log("4");
  } else if (n % 4 == 0) {
    console.log("3");
  }
}
