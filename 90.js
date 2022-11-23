function numbSort(numbers) {
    let myArr=[];
    numbers.sort((a,b)=>a-b);
    for(let i=0;i<numbers.length/2;i++) {
        myArr.push(numbers[numbers.length-1-i]);
        myArr.push(numbers[i]);
    }
    myArr=myArr.slice(0,numbers.length);
    console.log(myArr.join(" "));
}
numbSort([1,5,89,234,3]);