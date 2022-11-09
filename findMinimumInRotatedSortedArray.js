//[4,5,6,7,0,1,2]
 //l     m     r


/*
Steps
    1. set up a regular binary search
    2. see which side is NOT sorted
        -if nums[mid] >= nums[right], right side of array is not sorted. search this side.
            -update left = mid + 1;
        -else (left side of array is not sorted). search this side
            -update right = mid;
    3. return nums[right] nums[right] will hold minimum. 
*/

var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while(left < right){
        let mid = Math.floor((left + right) / 2);
        if(nums[mid] >= nums[right]){
            left = mid + 1;
        }
        else{
            right = mid
        }
    }
    return nums[right];
}
