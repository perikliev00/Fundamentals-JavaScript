function magicSum(arr,numb) {
    let sum=0;
    for(let i=0;i<arr.length;i++) {
        for(let x=i+1;x<arr.length;x++) {
            sum=arr[i]+arr[x];
            if(sum===numb) {
                console.log(`${arr[i]} ${arr[x]}`)
            }
            sum=0;
        }
    }
}
magicSum([1,2,3,4,5,6,7,8,9],5)