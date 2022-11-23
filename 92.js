function searchingForNumber(arr,arr2) {
    let manipulatedArr=[];
    let amountNeedToTake=arr2[0];
    let amountNeedToRemove=arr2[1];
    let searchedNumber=arr2[2];
    manipulatedArr=arr.slice(0,amountNeedToTake);
    manipulatedArr.splice(0,amountNeedToRemove);
    let x=0
    for(let i=0;i<manipulatedArr.length;i++) {
        if(manipulatedArr[i]==searchedNumber) {
            x++;
        }
    }
    console.log(`Number ${searchedNumber} occurs ${x} times.`)
}