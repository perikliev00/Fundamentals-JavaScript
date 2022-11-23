function proceseedOddNumbers(arr) {
    let result=arr.filter((numb,i) => i%2==1);
    result=result.map(x => x*2);
    result=result.reverse();
    console.log(result.join(" "));
}
proceseedOddNumbers([1,2,3,4,5,6])