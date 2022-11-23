function maxNumber(arr) {
    let arr2=[];
    let j=0;
    
    for(let i=0;i<arr.length;i++) {
        for(let x=0;x<arr.length;x++) {
            if(arr[i]>arr[x+i]) {
                j++;
            }
        }
        if(j==arr.length-i-1) {
            arr2.push(arr[i]);
        }
        j=0;
    }
    console.log(arr2.join(" "));
}
maxNumber([14,11,22,13])