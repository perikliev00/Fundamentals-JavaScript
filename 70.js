function smallestNumber(numOne,numTwo,numThree) {
    let minNumber=0;
    if(numOne<=numTwo&&numOne<=numThree) {
        minNumber=numOne;
    } else if(numTwo<=numOne&&numTwo<=numThree) {
        minNumber=numTwo;
    } else if(numThree<=numOne&&numThree<=numTwo) {
        minNumber=numThree;
    }
    console.log(minNumber)
}
smallestNumber(1,1,1)