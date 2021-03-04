// matrix problem

// either traversal or transformation

// matrix is just and array of array

/**
 *  [[1,2,3]]
 *   [4,5,6]
 *   [7,8,9]
 */

// rotate image
// You are gven n * n 2D matrix representing an image.
// rotate the image 90 degree clockwise
// you have to rotate the image on place with no second matrix

// inputs number n*n

// output nothing

// mutate the input and return nothing

// edge cases (n/a)

//assumptions = matrix might always hold the numbers

// can we find the relationship between input coordinates and the output coordinates

// no universal rules between coordinates 

// reverse reverseState and flip the coordinates

// psuedo code

/*
  reverse outer arrays
  for each row
    => for each column
        ->flip coordinates
*/

var rotate =(matrix)=>{
    matrix.reverse();
    for (let i =0;i<matrix.length; i++){
        for (let j=0;j<i;j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp;
        }
    }
}


// time complexity = n^2 
// space complexity = O(1) constant space