// Group anagrams

// Given an array of strings, return the strings griuped by anagrams

// Anagram = when two words have the same letters , but they can be in different orders

/* 
    example 
    ["ab","ba"] <== group them because they are same in order
    ["bb"] ["bba"] <== they are not the same so differece them

    loop through the string input lists
    => sort each strings
    => sorted key in table? add to array
    => sorted key not in table? create the array


*/

let groupAnagrams = (strs)=>{
    const hashTable ={};
    for (let str of strs){
        const sorted = str.split("").sort().join("")    // its called method chaining
        // "abc" =====> ["a","b","c"]
        if(hashTable[sorted]){
            hashTable[sorted].push(str)
        }else{
            hashTable[sorted] = [str]
        }
    }
   return Object.values(hashTable)
}

// sorting might be very expensive

// sort() = > n log n

// time complexity = O(n * (m log m))  
// where, n = length of "strs" and m = longest str

// space complexity = O(n) linear space
// n = length of the strs
// anagrams are all gonna be unique