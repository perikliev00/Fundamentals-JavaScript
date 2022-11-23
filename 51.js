function identialArr(arr1,arr2) {
    let sum=0;
    let firstDifrentElement=0;
    let j=0;
    for(let i=0;i<arr1.length;i++) {
        sum=sum+Number(arr1[i]);
        if(arr1[i]!=arr2[i]&&j<1) {
            firstDifrentElement=i;
            j++;
        }
    }
    if(j>0) {
        console.log(`Arrays are not identical. Found difference at ${firstDifrentElement} index`)
    } else {
        console.log(`Arrays are identical. Sum: ${sum}`)
    }
}