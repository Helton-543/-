const str = readline();
const arr = str.split("");
arr.sort((a, b) => {
  return a.charCodeAt() - b.charCodeAt();
});
console.log(arr.join(""));
