/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(str) {
    
    var sMap = new Map();
    var result = [];
    for(let i=0;i<str.length;i++){
        let charCount = [];
        for(let n=0;n<26;n++){
            charCount[n] = 0;
        }
        for(let j=0;j<str[i].length;j++){
            charCount[str[i][j].charCodeAt(0) - "a".charCodeAt(0)]  += 1;
        }
        let key= charCount.join('-')
        let value = (sMap.get(key) == undefined) ? [str[i]] : [...sMap.get(key),str[i]];
        sMap.set(key,value);
    }
    for(let key of sMap.keys()){
        result.push(sMap.get(key));
    }
    return result;
};

var result = groupAnagrams(["eat","tea","tan","ate","nat","bat"]);
console.log(result);