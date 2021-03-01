// Find first unique character

// Given a string , find the first non repeating charcater in it and return it's index

// if it dosen't exist return -1

/* 
                "pramiitt"
    
    # check if each charcaters appears one or more time.
    # if character appears one time, its unique.
    # So we need to count that charcater.

*/

// first step is to look at each other
// best way to do that is by using loop

// update the charcater count and store it

// so we use some kind of datastructure to keep thing organize

// here we will be using hash table which is equivalent to javascript objects

/*
lookup each character in the table
=> If it's unique (value==1) return index


none are unique then simply return -1

*/

let firstUnique = (s)=>{
    const hashTable = {};
    for (let char of s){
        if (hashTable[char]){
            hashTable[char]++;
        }else{
            hashTable[char] = 1;
        }
    }

    for (let i = 0; i < s.length; i++){
        const char = s[i];
        if(hashTable[char] == 1)
        return i;
    }

    return -1;
}

// time complexity = o(2n) 

// beacuse of two loop 

// space complexity = o(1) 

// because max number of keys we can have is 
// 32 for small "a" and 32 for cpital "A"
// which boils down to O(64)
// which means the space complexity is O(n) 





// solution 2 easy one

let firstUnique = (s)=>{
    for (i=0;i<s.lenght;i++){  //--------------------> O(n)
        const char = s[i];
        if(s.indexOf(char) === s.lastIndexOf(char)){  //------------> O(2n)
            return i;
        }
    }

    return -1;
}

// time complexity = 2n * n = n * n = n ^ 2 (which is quadratic time)

// space complexity = O(1) 
// beacuse we are not using any data structure to store any variable
