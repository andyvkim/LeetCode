/*
Steps
    1. set up a regular binary search
    2. find mid point and return if nums[mid] === target;
    3. see if the array to the LEFT of the MID is sorted (skip to 4 if this isn't sorted)
        -if left side is sorted
            -see if target is greater than or equal to start of array && if target is less than or equal to middle of array
                -if so update right boundary to mid - 1;
                -if not update left boundary to mid + 1;
    4. see if array to the RIGHT of MID is sorted
        -if right side is sorted
            -see if target is greater than or equal to middle of array and target is less than or equal to end of array
                -if so update left boundary to mid + 1;
                -if not, update right boundary to mid - 1;
    5. return -1 after while loop (happens when target is not found)
*/



var search = function(nums, target){
    let left = 0;
    let right = nums.length - 1;

    while(left <= right)
    {
        let mid = Math.floor((left + right) / 2);
        if(nums[mid] === target){
            return mid;
        }

        if(nums[mid] >= nums[left]){
            if(target >= nums[left] && target <= nums[mid]){
                right = mid - 1;
            }
            else{
                left = mid + 1;
            }
        }
        else{
            if(target >= nums[mid] && target <= nums[right]){
                left = mid + 1;
            }
            else{
                right = mid - 1;
            }
        }
    }
    return -1;
}