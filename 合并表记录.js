const num = parseInt(readline());
let map = {};
for (let index = 0; index < num; index++) {
  let arr = readline().split(" ");
  if (!map[arr[0]]) {
    map[arr[0]] = parseInt(arr[1]);
  } else {
    map[arr[0]] += parseInt(arr[1]);
  }
}
for (const key in map) {
  console.log(`${key} ${map[key]}`);
}
