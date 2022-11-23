function oddAndEvenSum(number) {
    let string=String(number);
    let oddSum=0;
    let evenSum=0;
    for(let i=0;i<string.length;i++) {
        if(Number(string[i])%2==0) {
            evenSum=evenSum+Number(string[i]);
        } else {
            oddSum=oddSum+Number(string[i]);
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}