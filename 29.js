function ameazingNumbers(numb) {
    numb=String(numb);
    let sum=0;
    let j=0;
    for(let i=0;i<numb.length;i++) {
        sum=sum+Number(numb[i]);
    }
    sum=String(sum);
    let len=sum.length;
    for(let i=0;i<len;i++) {
        if(sum[i]==9) {
            j++;
        }
    } 
    if(j>0) {
        console.log(`${numb} Amazing? True`);
    } else {
        console.log(`${numb} Amazing? False`)
    }
}