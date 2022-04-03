/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if(s.length!=t.length) return false;
    
    let sCount = new Map();
    let tCount = new Map();
    
    for(let i=0;i<s.length;i++){
        sCount.set(s[i],1 + (sCount.get(s[i]) == undefined ? 
                                                0 : 
                                                sCount.get(s[i])
                                                ));
        tCount.set(t[i],1 + (tCount.get(t[i]) == undefined ? 
                                                0 :
                                                tCount.get(t[i])
                                                ));
    }
    for(let key of sCount.keys()){
         if(sCount.get(key) != tCount.get(key))
         return false
    }
    return true;
};
let result = isAnagram('rat','art');
console.log(result);