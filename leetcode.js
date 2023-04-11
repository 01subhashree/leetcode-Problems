// problem 1

function romanToInt (s) {
    const value = {
        I: 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    }
    let count=0
    for(let i=0;i<s.length;i++){
        let a= value[s[i]]
        let b =value[s[i+1]]
        if(a<b){
            count += b - a
            i++;

        }else{
            count += a 
        }
    }
    return count;
};
console.log(romanToInt("III"));

// problem 2

function longestCommonPrefix(strs) {
    let prefix = ""
   if(strs === null || strs.length === 0) return prefix

   for (let i=0; i < strs[0].length; i++){ 
       const char = strs[0][i] 

       for (let j = 1; j < strs.length; j++){ 
           if(strs[j][i] !== char) return prefix
       }
       prefix = prefix + char
   }

   return prefix
};
console.log(longestCommonPrefix(["flower", "flow", "flight"]))

// problem 3
function isValid(s) {
    const stack = []

    for (i=0; i < s.length; i++){

        let curChar = s[i];

        switch(curChar) {
            case '(': stack.push(')');
                break;
            case '[': stack.push(']');
                break;
            case '{': stack.push('}')
                break;
            default:
                topElement = stack.pop()
                if (curChar !== topElement) return false;       
        }
    }
    return stack.length === 0;
};
console.log(isValid("()[]{}"))
