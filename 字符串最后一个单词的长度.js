function getLastWordLength(word = readline()) {
  const wordArrs = word.split(" ");
  const len = wordArrs[wordArrs.length - 1].length;
  return len;
}
console.log(getLastWordLength());
