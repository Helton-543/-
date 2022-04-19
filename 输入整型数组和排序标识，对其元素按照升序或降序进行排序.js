function sortNum(size = readline(), nums = readline(), type = readline()) {
  let arr = nums.split(" ");
  arr.sort((a, b) => {
    switch (parseInt(type)) {
      case 0:
        return a - b;
      case 1:
        return b - a;
      default:
        break;
    }
  });
  console.log(arr.join(" "));
}
sortNum();
