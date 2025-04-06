let numbers = [ 1,3,4,6,7,5] ;
let target = 13;

var twosum = function(nums , target)
{
    let map = new Map()
    for(let i = 0;i<nums.length;i++){
    let complement = target - nums[i];
    if(map.has(complement))
        return[map.get(complement) ,i]
    map.set(nums[i] , i);
    }
    console.log(map)
}