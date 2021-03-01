// new pattern 

// pointer method or pointer traversal 

// valid palindrome

// given a string determine weather it is a palindrome

// palindrome = a word that is spelled same backwards as it is forwards

// input string 
// output boolean value


// "naive" solution are the problems with the obivious solution but not the best or the effiecient one 

let isPalindrome = (s)=>{
    const sanitize= s.replace(/[^\w]/gi,"").toLowerCase()
    return sanitize.split("").reverse().join("") === sanitize
}

// time complexity = O(n) 

// space complexity = (implicit) O(n)


// Another solution

// solution #2 

// using pointer method

// create left and right pointers (represented by a indices)
// while pointers haven't met 
// check if chars are same
// move pointers towards center

let isPalindrome = (s)=>{
     s= s.replace(/[^\w]/gi,"").toLowerCase()
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]){
            return false;
            
        }
        left++;
        right--;
    }
    return true;
}


// time complexity = O(n)

// space complexity = 0(1)