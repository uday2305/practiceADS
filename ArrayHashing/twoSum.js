/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let hashMap = new Map();
   for(let i=0;i<nums.length;i++) {
       let remainingSum = target-nums[i];
       let existingIndex = hashMap.get(remainingSum);
       if( existingIndex != undefined){
           return [existingIndex,i];
       }
       hashMap.set(nums[i],i)
   }
};

let result = twoSum([2,7,11,15],9);
console.log(result);