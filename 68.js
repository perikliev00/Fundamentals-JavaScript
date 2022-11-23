function signChek(numOne,numTwo,numThree) {
    let j=0;
    if(numOne<0) {
        j++;
    } 
    if(numTwo<0) {
        j++;
    }
    if(numThree<0) {
        j++;
    }
    if(j==1||j==3) {
        console.log("Negative");
    } else {
        console.log("Positive");
    }

}
signChek(-1,-2,-3)