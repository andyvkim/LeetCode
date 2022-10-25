/*in lookup hash
    -values as keys, 
    -indices as values 
*/
var twoSum = function(nums, target) {
    const lookup = {};
    for(let i = 0; i < nums.length; i++){
        let difference = target - nums[i];
        if(!(difference in lookup)){
            lookup[nums[i]] = i;
        }
        else{
            return [lookup[difference], i];
        }
    }
};