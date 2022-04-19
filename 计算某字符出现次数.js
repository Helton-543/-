function getWordNum(word = readline(), code = readline()) {
  const wordArr = word.toLowerCase().split("");
  const codeLower = code.toLowerCase();
  let num = 0;
  wordArr.forEach((item) => {
    if (item === codeLower) {
      num++;
    }
  });
  return num;
}

console.log(getWordNum());
