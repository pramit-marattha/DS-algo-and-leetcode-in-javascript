// given an array nums of n integers are there elements a,b,c in nums where a+b+c = 0
// find all unique triplets in the array ehich give the sums of zero

// input is array of numbers

// output is array of triplets of numbers

// edge case none of the number sum to zero

// assumptions ->input can have duplicate numbers ->output triplets themselves must be unique ->triplet order does not matter

// naive solution (brute force)

// psuedo code
/* 
    add every number in nums 
    =>to every second numbers
        =>and every third numbers
        =>if == 0 , save combination
*/

// psuedo code
/* 
    for every number in nums
    =>while left < right
      =>too low? move left
      =>too high> move right
      =>zero? add to output, move both
*/
// solution if there are no nay duplicates
var threeSum = (nums)=>{
    const output = [];
    nums.sort((a,b)=>a -b );
    for (let i =0; i<nums.length - 2; i++){
        let left = i+1;
        let right = nums.length - 1;
        while(left < right){
            let total = nums[i] + nums[left] + nums[right]
            if(total === 0){
                output.push([nums[i],nums[left],nums[right]])
                right--;
                left++;
            }else if (totla > 0){
                right--;
            }else{
                left++;
            }
        }
    }
    return output;
}


// solution if there are duplicates values


var threeSum = (nums)=>{
    const output = [];
    nums.sort((a,b)=>a -b );  // sort = O(n log n)
    for (let i =0; i<nums.length - 2; i++){  // first loop 
        let left = i+1;
        let right = nums.length - 1;
        if (i> 0 && nums[i] === nums[i-1]) continue;  // skips the while loop
        while(left < right){                           // inner loop
            let total = nums[i] + nums[left] + nums[right]
            if(total === 0){
                output.push([nums[i],nums[left],nums[right]])
                while(left < right && nums[right - 1] === nums[right]){
                    right--;
                }
                while(left < right && nums[left + 1] === nums[left]){
                    left++;
                }
                right--;
                left++;
            }else if (totla > 0){
                right--;
            }else{
                left++;
            }
        }
    }
    return output;
}

// time complexity = O(n^2)
// space complexity = 0(1)
