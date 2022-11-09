//[2,3,-2,4]


/*

Steps
    1. keep track of 
        -overall max
        -the currentMax/prevMax in the current iteration of for loop 
        -the currentMin/prevMin in the current iteration of for loop
    2. currentMax is the MAX of 3 options
        -nums[i]
        -nums[i] * currentMax
        -nums[i] * currentMin
    3. currentMin is the MIN of 3 options
        -nums[i]
        -nums[i] * currentMax
            -need to reference tmp variable because currentMax changes in line before
        -nums[i] * currentMin
    4. compare currentMax to overallMax and take larger of two
    5. return overallMax
*/
var maxProduct = function(nums) {
    let overallMax = nums[0];
    let currentMin = nums[0];
    let currentMax = nums[0];

    for(let i = 1; i < nums.length; i++){
        let tmp = nums[i] * currentMax;
        currentMax = Math.max(nums[i], nums[i] * currentMax, nums[i] * currentMin);
        currentMin = Math.min(nums[i], tmp, nums[i] * currentMin);

        overallMax = Math.max(currentMax, overallMax);
    }
    return overallMax;
}