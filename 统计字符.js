let str = readline();
let wordNum = str.match(/[a-zA-Z]/gi)?str.match(/[a-zA-Z]/gi).length:0;
let spaceNum = str.match(/\s+?/g)?str.match(/\s+?/g).length:0;
let num = str.match(/\d/gi)?str.match(/[0-9]/gi).length:0;
let otherNum = str.length - wordNum - spaceNum - num;
console.log(wordNum);
console.log(spaceNum);
console.log(num);
console.log(otherNum);