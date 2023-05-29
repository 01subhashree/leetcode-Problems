// Length of Last Word

var lengthOfLastWord = function(s) {
    let newArr = s.trim(' ').split(' ');
    console.log(newArr[newArr.length - 1].length);
};
lengthOfLastWord("Hello World");