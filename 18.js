function triangle(n) {
    for(let i=1;i<=n;i++) {
        let result=""
        for(let j=0;j<i;j++) {
         result=result+i+" ";
        }
        console.log(result);
    }
}
triangle(4);