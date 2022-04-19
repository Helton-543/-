let str = readline();

if (str.toLowerCase() === str) {
  let newstr = str.split("").reverse().join("");
  console.log(newstr);
}
