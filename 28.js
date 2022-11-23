function floratOrInteger(a,b,c) {
    sum=a+b+c;
    if(sum%1==0){
    console.log(`${sum} - Integer`)
    } else {
         console.log(`${sum} - Float`)
    }
}
floratOrInteger(1.1,2,3)