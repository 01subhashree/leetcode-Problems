//1.... find string in string

function isSubstring(s1, s2) {
  var M = s1.length;
  var N = s2.length;

  /* A loop to slide pat[] one by one */
  for (var i = 0; i <= N - M; i++) {
    var j;

    /* For current index i, check for
 pattern match */
    for (j = 0; j < M; j++) if (s2[i + j] != s1[j]) break;

    if (j == M) return i;
  }

  return -1;
}

/* Driver code */
var s1 = "Zinger";
var s2 = "Code Zinger University";

var res = isSubstring(s1, s2);
console.log(res);

//2.... add Two number

function addTwoNumbers(l1, l2) {
  const result = [];
  const maxLength = Math.max(l1.length, l2.length);
  let carry = 0;

  for (let i = 0; i < maxLength; i++) {
    const sum = (l1[i] || 0) + (l2[i] || 0) + carry;
    result[i] = sum % 10;
    carry = Math.floor(sum / 10);
  }

  if (carry > 0) {
    result[i + 1] = carry;
  }

  return result;
}

const l1 = [2, 5, 7];
const l2 = [5, 6, 4, 3];
const sum1 = addTwoNumbers(l1, l2);
console.log(sum1);
// 3....sort Array
let arr = [1, 0, 2, 1, 0, 2, 0, 2, 1, 0];
let N = arr.length;

console.log(sort012(arr, N));

function sort012(arr, N) {
  let obj = {};
  for (let i = 0; i < N; i++) {
    let num = arr[i];
    if (obj[num] > 0) {
      obj[num]++;
    } else {
      obj[num] = 1;
    }
  }
  // return obj
  let sortedArr = [];
  for (let key in obj) {
    sortedArr.push([key, obj[key]]);
  }

  let num = "";
  for (let i = 0; i < sortedArr.length; i++) {
    num = num + Numbers(sortedArr[i], i);
  }
  return num.split("");
}

function Numbers(arr, i) {
  let ans = "";
  while (arr[1] > 0) {
    ans = ans + i;
    arr[1]--;
  }
  return ans;
}

// 4....Move all the negative elements to one side of

function moveNegativeNum(Arr) {
  for (let i = 0; i < Arr.length; i++) {
    if (Arr[i] < 0) {
      Arr.push(Arr[i]);
      Arr.splice(i, 1);
    }
  }
  return Arr;
}
const Arr = [5, -8, 3, -9, 2];
console.log(moveNegativeNum(Arr));

// 5 .....Distance between two closest minimum

function findMinimumDistance(arr) {
  var minDistance = Infinity;
  var minValue = Infinity;
  var prevIndex = -1;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i];
      prevIndex = i;
    } else if (arr[i] === minValue) {
      var distance = i - prevIndex;
      if (distance < minDistance) {
        minDistance = distance;
        prevIndex = i;
      }
    }
  }
  if (minDistance == Infinity) {
    return -1;
  } else return minDistance;
}
