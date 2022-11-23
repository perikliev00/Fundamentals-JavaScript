function calculator(numb1,operator,numb2) {
   if(operator=="+") {
        console.log((numb1+numb2).toFixed(2));
    } else if(operator=="-") {
        console.log((numb1-numb2).toFixed(2));
    } else if(operator=="*") {
        console.log((numb1*numb2).toFixed(2));
    } else if(operator=="/") {
        console.log((numb1/numb2).toFixed(2));
    } 
}