function oddNumbersSum(n) {
   let sum=0;
    for(let i=1;i>0;i++) {
        if(i%2!=0) {
            console.log(i)
            n--;
            sum=sum+i;
        }
        if(n==0) {
            break;
        }
    }
    console.log(`Sum: ${sum}`);
} 