/*3. Write a JavaScript function to get the first element of an array.
 Passing a parameter 'n' will return the first 'n' elements of the array.*/
function first(arr,n=1) {
    if (n < 1 ) { n = 0 }
    return arr.slice(0,n);
}

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
/*
7
[]
[7, 9, 0]
[7, 9, 0, -2]
[]*/