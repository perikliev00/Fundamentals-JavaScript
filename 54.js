function addAndSubstrac (arr) {
    let modArr=[]
    let sum=0;
    let sumMod=0;
    for(let i=0;i<arr.length;i++) {
        if(arr[i]%2==0) {
            modArr[i]=arr[i]+i;
        } else {
            modArr[i]=arr[i]-i;
        }
    }
    for(let i=0;i<arr.length;i++) {
        sum=sum+arr[i];
    } 
    for(let i=0;i<modArr.length;i++) {
        sumMod=sumMod+modArr[i];
    }
    console.log(`[ ${modArr.join(", ")} ]`);
    console.log(sum);
    console.log(sumMod);
}
addAndSubstrac([-5, 11, 3, 0, 2])