// binary search

// search through an sorted array in 0(logn) time


// serach insert position 
// given a sorted array and a target value return the index if an target is found if not return the index where it would be if it were inserted in order.
// you may assume no duplicate in the array

// example find 5 in [1,3,5,6]

// input is arrays of numbers

// output is index of a number

// edge case => empty array input 

// assumptions => no empty functions also no duplicates in an input array

// psuedo code

/**
 *  int lo and hi pointers
 *  while lo<=hi
 *      => calculate mid pointer 
 *      => compare mid value value to target value
 *      => if target greater , lo = mid + 1
 *      => if target less, hi = mid - 1 
 */

 let searchInsert = (nums,target) =>{
     let lo = 0;
     let hi = nums.length - 1;
     while(lo <= hi){
         let mid = Math.floor((hi + lo) / 2);
         let midVal = nums[mid];
         if (target === midVal){
             return mid;
         } else if(target > midVal){
             lo = mid + 1;
         } else {
             hi = mid - 1;
         }
     }
     return lo;
 }

 // time complexity = O(logn) logarithmic

 // space complexity = O(1) constant space