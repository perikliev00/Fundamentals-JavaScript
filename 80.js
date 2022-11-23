function sumOfFirstAndLast(arr) {
   let firstElement=Number(arr.shift());
   let lastElement=Number(arr.pop()); 
   let sum=firstElement+lastElement;
   console.log(sum);
}
console.log(sumOfFirstAndLast([1,2,3,4,5]));