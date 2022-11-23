function simpleCalculator(numOne,numTwo,op) {
    let result=0;
    if(op=="subtract") {
        result=numOne-numTwo
    } else if(op=="add") {
        result=numOne+numTwo;
    } else if(op=="multiply") {
        result=numOne*numTwo
    } else if(op=="divide") {
        result=numOne/numTwo
    }
    console.log(result)
}