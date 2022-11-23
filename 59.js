function equalSums(arr) {
    let j=0;
    let sum=0;
    let sum2=0;
    if(arr.length===1) {
        j=-1;
    }
    for(let i=1;i<arr.length;i++) {
        sum=sum+arr[i-1];
        for(let x=i+1;x<arr.length;x++) {
            sum2=sum2+arr[x];
        }
        if(sum==sum2) {
            j=i;
        }
        sum2=0

    }
    if(j==0) {
        console.log("no")
    } else if(j==-1) {
        console.log("0")
    } else {
        console.log(`${j}`)
    }
}
equalSums([1])
