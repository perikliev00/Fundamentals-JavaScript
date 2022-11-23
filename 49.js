function sumEvenNumbers(arr) {
    let sum=0;
    for(let i=0;i<arr.length;i++) {
        if(Number(arr[i])%2==0) {
            sum=sum+Number(arr[i]);
        }
    }
    console.log(sum);
}