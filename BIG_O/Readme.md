# Understanding big O from first principle

## what is Big O ?

### big O represent the efficiency of an algorithm

## There are two different types of big O

1. Time complexity = speed, fast ,efficiency
2. Space complexity = memory use (how much space is used) (extra variable and data structure to solve the algorithm)

In real world if you have large input for your functions both time and space starts to cause problems

we use these technique as an benchmark of the algorithm (to measure how good they are)

### Grading Time ans space

we dont compare it to the absolute ...
we compare relative to the size of the input

## linear time

Two time the input size ===>>> 2 times the time it takes

[1,2,3] = 1s(absolute) ,3(size)

[1,2,3,4,5,6] = 2s(absolute), 6(size)

we can also say that the relationship between time and input is 1 to 1 (1:1)

big O notation: o(n)

## constant Space

[1,2,3] = 0(extra space) 3(size)
[1,2,3,4,5,6] = 0(extra space) 6(size)

if either space and the time has no realtionship with the input than we called it a constant space

big O notation: o(1)

order of efficiency

example =>

most efficient ==== > O(n) "constant"

                     O(log n) "logarithmic"

                     O(n) "linear"

                     O(n log n) "linear logarithmic"

                     O(n * n) "quadratic"

least efficient ==== > O(2 ^ n ) "exponential"

code example =

How does the input size effect the specific lines of the codes below

let length = (arr)=>{

### // time and space will be constant here because int takes exactly the same space weather its 0 or 2,147,483,647

let counter = 0;

### // runs n number of time where n is the arry length

###

/\*
if we go from size [1] to [1,2]

              size  1      2
         iteration  1      2

so clearly there is 1 to 1 relationship which is linear
\*/

for (let i = 0; i <arr.length; i++){
counter++;
}
return counter;
}

so it is taking O(1) and 0(n)
thats why we simplify and take the term which is in hghest order

### only keep the highest order

simplifying BIG O

-- Drop the lower order term
-- Drop constant term

![image](https://user-images.githubusercontent.com/37651620/109485752-280e8000-7aaa-11eb-9525-f9b63fbee416.png)

n + n = 2n
so we drop the 2 and remaining is the notation

### range of efficiency

1)best 2) average 3) worst

code example =

"abcde".indexof("b")

is "b" in "abcde"?
if so return its index

1. best case = less amount of effort
2. average case = avg amount of effort
3. worst case = most amount of effort

![image](https://user-images.githubusercontent.com/37651620/109486528-18436b80-7aab-11eb-93d1-2d6d5fe70ef3.png)
![image](https://user-images.githubusercontent.com/37651620/109486599-31e4b300-7aab-11eb-9268-f62dd94797bb.png)
![image](https://user-images.githubusercontent.com/37651620/109486651-43c65600-7aab-11eb-92ad-c6f28e9b2f1b.png)

## Big O always takes the worst case

Hence, this "indexof" function is O(n) linear time
