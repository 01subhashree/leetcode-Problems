function findMaxMin(numbers) {
  if (numbers.length === 0) {
    return { Max: undefined, Min: undefined };
  }
  let Max = numbers[0];
  let Min = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > Max) {
      Max = numbers[i];
    }

    if (numbers[i] < Min) {
      Min = numbers[i];
    }
  }

  return { Max, Min };
}

const numbers = [5, 10, 2, 8, 3];
const { Max, Min } = findMaxMin(numbers);

console.log(Max);
console.log(Min);

// Largest sum of contiguous sub-array

function findMaxSubarraySum(arr) {
  let MaxSum = arr[0];
  let Sum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    Sum = Math.max(arr[i], Sum + arr[i]);
    MaxSum = Math.max(Sum, MaxSum);
  }
  return MaxSum;
}

// Example usage:
const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maxSum = findMaxSubarraySum(array);
console.log(maxSum);

// Maximum Number of Vowels in a Substring of Given Length

function check(ch) {
  if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
    return true;
  }
  return false;
}
var maxVowels = function (s, k) {
  let result = 0;
  let VowelCount = 0;
  for (let i = 0; i < k; i++) {
    if (check(s[i])) {
      VowelCount++;
    }
  }
  result = Math.max(result, VowelCount);

  for (let j = k; j < s.length; j++) {
    if (check(s[j - k])) {
      VowelCount--;
    }
    if (check(s[j])) {
      VowelCount++;
    }
    result = Math.max(result, VowelCount);
  }
  return result;
};

const s = "abciiidef";
const k = 3;
console.log(maxVowels(s, k));
