function smallestTwoNumbers(arr) {
    let result=arr.sort((a,b) => a-b);
    result=result.slice(0,2);
    return result.join(" ")
}
console.log(smallestTwoNumbers([1,2,,-2,-4,3,4,5]))