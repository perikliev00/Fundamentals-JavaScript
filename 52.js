function condenseArrToNumbers(arr) {
    let sum=0;
    let arr2=[]; 
    let j=0;
    for(i=0;i<arr.length-1;i++) {
        arr2.push(arr[i]+arr[i+1]);
    }
console.log(arr2)
}
condenseArrToNumbers([5,0,4,1,2]);
