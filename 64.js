function mathPower(number,pow) {
    let result=1;
    for(let i=0;i<pow;i++) {
        result=result*number;
    }
    console.log(result);
}