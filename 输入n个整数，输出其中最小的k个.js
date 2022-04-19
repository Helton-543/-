function getNum(size = readline(), num = readline()) {
  let sizeArr = size.split(" ");
  console.log(
    num
      .split(" ")
      .sort((a, b) => {
        return a - b;
      })
      .splice(0, parseInt(sizeArr[1]))
      .join(" ")
  );
}
getNum();
