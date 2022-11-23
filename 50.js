function evenAndOddSubstraction(arr) {
    let sumEven=0;
    let sumOdd=0;
    for(let i=0;i<arr.length;i++) {
        if(arr[i]%2==0) {
            sumEven=sumEven+arr[i];
        } else {
            sumOdd=sumOdd+arr[i];
        }
    }
    console.log(sumEven-sumOdd)
}