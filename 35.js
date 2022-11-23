function sumDigits(n) {
    n=String(n)
    let sum=0;
    for(let i=0;i<n.length;i++) {
        sum=sum+Number(n[i]);
    }
    console.log(sum)
}