function reverseNumbers(n,arr) {
    let reverse=[];
    for(let i=n-1;i>=0;i--) {
        reverse.push(arr[i])
       
    }
    console.log(reverse.join(" "));
}