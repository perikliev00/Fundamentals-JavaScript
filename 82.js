function sumK(n,k) {
    let result=[1];
    for(let i=0;i<n-1;i++) {
        let newArr=result.slice(-k);
        let sum=0;
        for(let el of newArr) {
            sum=sum+el;
        }
        result.push(sum);
    }
    console.log(result.join(" "))
}
sumK(8,3)