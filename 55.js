function commonElements(arr,arr2) {
    let arr3=[];
    for(let i=0;i<arr.length;i++) {
        for(let x=0;x<arr2.length;x++) {
            if((arr[i])===(arr2[x])) {
                arr3.push(arr[i]);
            }
        }
    }
    for(let j=0;j<arr3.length;j++) {
        console.log(arr3[j]);
    }
}