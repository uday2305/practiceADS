var containsDuplicate = function(nums) {
var hashSet = new Set();
    for(var i=0;i<nums.length;i++){
        if(hashSet.has(nums[i]))
            return true;
        hashSet.add(nums[i]);
    }
    return false;
};

let result = containsDuplicate([1,3,4,1]);
console.log(result);