function longestSreak(arr) {
    let j=0
    let arr2=[0];
    for(let i=0;i<arr.length;i++) {
        let arr1=[];
        for(let x=i;x<arr.length;x++) {
            if(arr[i]===arr[x]) {
                arr1.push(arr[x]);
                j=1;
                i=x;
                if(arr1.length>arr2.length) {
                    arr2=arr1;
                }
            } else {
                break;
            }
        }
    }
    console.log(arr2.join(" "))
}
longestSreak([1,1,1,1,1,1,1,2,2,2,2,3])