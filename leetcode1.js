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
console.log(romanToInt ("III"));