while ((line = readline())) {
  let arr = readline().split(" ");
  let index = parseInt(readline());
  if (index === 0) {
    console.log(0);
  } else {
    let newArr = arr.slice(-index);
    console.log(newArr[0]);
  }
}
