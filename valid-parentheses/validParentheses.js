// data structure = stack

// given a string that contains just the charcaters "("  ")"  '{'  '}'  '[' and ']' determine if the input string is valid

// input string is valid if it contains:
// 1) open brackets must be closed by the same type of bracket
// 2) open brackets must be closed in a correct order

// NOTE: that an empty string is also considered valid

// () => true
// [{()}] => true
// (] => false
// ([) => false


// input string
// output boolean

// Edge cases = empty string input
// assumptions = if empty string return true

// coverting problem into sub-problems is called "chunking"

// A stack is an array wiht more specific rules

// push and pop methods are called stack api

// psudo code
/**
 *  for char in str
 *  => if opening push to stack
 *  => if closing pop and compare
 *    => if test fails return false 
 *  => if all passed ,return true
 */

 let isValid = (s)=>{
     const stack =[];
     for(let char of s){
         if (char === "(" || char === "{" || char === "["){
             stack.push(char)
         }else{
             if (stack.length === 0 ) return false;
             const last = stack.pop();
             if (last === "(" && char !== ")"){
                 return false;
             }else if(last === "{" && char !== "}"){
                 return false;
             }else if(last === "[" && char !== "]"){
                 return false;
            }
         }
     }
     if (stack.lenght){
         return false;
     } else{
         return true;
     }
 }


 // another solution (easy and nicer syntax)

 let isValid = (s)=>{
    const stack =[];
    const pairs = {
        "(":")",
        "{":"}",
        "[":"]"
    };
    for(let char of s){
        if (char in pairs){
            stack.push(char)
        }else{
            if (stack.length === 0 ) return false;
            const last = stack.pop();
           if (pairs[last] !== char) return false;
        }
    }
    if (stack.lenght){
        return false;
    } else{
        return true;
    }
}



// time complexity = O(n) linear time
// where n is str length 

// space complexity = O(n) linear space