// Two sum 

// given an array of numbers and a target return the indices of the number that add up to target 

// input is numbers 
// output will be tuple 


// edge cases = if none of the numbers add up to target 
// assumptions there is always the excat solution and each numbers can only be used once 

// naive solution (brute force)

// psuedo code

/*
    for every number in nums 
      => check every other numbers
            ->if == target ,return indices
*/

var twoSum = (numbers,target)=>{
    for (i=0;i<numbers.length; i++){
        const num = numbers[i];
        const want = target - num
        for (let j=i+1;j<numbers.length;j++){
            if(numbers[j] === want){
                return [i,j];
            }
        }
    }
}

// time complexity = O(n^2)
// space complexity = O(1)


// hash table

// psuedo code

/*
    for every number in nums
        =>calculate counterparts
        => in table ? return indices
        =>not in table ? store with indices
*/

var twoSum =(nums,target)=>{
    let hashTable = {};
    for (let i=0;i<nums.length;i++){
        const num = nums[i];
        const want = target - num;
        if (want in hashTable){
            const leftIndex = hashTable[want]
            return [leftIndex, i]
        } else{
            hashTable[want] = i;
        }
    }
}

// time complexity = O(n)
// space complexity = O(n)







