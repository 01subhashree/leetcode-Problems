// Find the Index of the First Occurrence in a String

var strStr = function(haystack, needle) {
    let result = haystack.toLowerCase().indexOf(needle.toLowerCase())
    console.log(result);
};
strStr("sadbutsad","sad");