let arr = [1, 2, 1, 8, 9, 7, 8];
function frequenceOfArr(arr) {
  const obj = {};
  for (let i of arr) {
    if (obj[i]) {
      obj[i]++;
    } else {
      obj[i] = 1;
    }
  }
  return obj;
}
console.log(frequenceOfArr(arr));

let arr1 = [1, 2, 3];
let arr2 = [4, 1, 9];
function same(arr1, arr2) {
  let obj1 = {};
  let obj2 = {};
  for (i of arr1) {
    obj1[i] = (obj1[i] || 0) + 1;
  }
  for (i of arr2) {
    obj2[i] = (obj2[i] || 0) + 1;
  }
  for (j in obj1) {
    if (!(j ** 2 in obj2)) {
      return false;
    }
    if (obj2[j ** 2] !== obj1[j]) {
      return false;
    }
  }
  return true;
}
console.log(same(arr1, arr2));

let str1 = "cinema";
let str2 = "iceman";

function sameStr(str1, str2) {
  let count1 = new Array(26);
  let count2 = new Array(26);
  for (let i = 0; i < count1.length; i++) {
    count1[i] = 0;
    count2[i] = 0;
  }
  let j = 0;
  for (j = 0; j < str1.length && str2.length; j++) {
    count1[str1[j].charCodeAt(0)]++;
    count2[str2[j].charCodeAt(0)]++;
  }
  if (str1.length !== str2.length) {
    return false;
  }
  for (let i = 0; i < str1.length; i++) {
    if (count1[i] != count2[i]) return false;
  }
  return true;
}
console.log(sameStr(str1, str2));
