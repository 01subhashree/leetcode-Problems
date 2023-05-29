// DSA 1 Filter the Number

function filterNumbers(array) {
  var filteredArray = [];

  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      filteredArray.push(array[i]);
    }
  }

  return filteredArray;
}

var array = [1, "two", 3, "four", 5];
var filteredArray = filterNumbers(array);

console.log(filteredArray); // Output: [1, 3, 5]

// DSA 2
//  Given an array of integers of size ‘n’, Our aim is to calculate the maximum sum of ‘k’ consecutive elements in the array

function findMaxSum(arr, k, n) {
  let Maxsum = 0;
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  Maxsum = sum;
  for (let j = 0; j < n; j++) {
    sum += arr[j + k] - arr[j];
    Maxsum = Math.max(sum, Maxsum);
  }
  return Maxsum;
}

const arr = [1, 3, 2, 4, 5, 1, 2];
const k = 3;
const n = 7;

const maxSum = findMaxSum(arr, k, n);
console.log(maxSum);
