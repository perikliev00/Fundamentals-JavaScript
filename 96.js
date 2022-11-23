function top5Integers(arr) {
    let sum=0;
    let arr1=arr.split(" ");
    for(let i=0;i<arr1.length;i++) {
        sum=sum+Number(arr1[i]);
    }
    let avarageNumber=sum/arr1.length;
    let numbers=arr1.map((x)=> Number(x)).sort((a,b)=> a-b );
    numbers=numbers.filter((x)=>x>avarageNumber);
    numbers=numbers.reverse();
    numbers=numbers.slice(0,5);
    if(numbers.length==0) {
        console.log("No");
    } else {
    console.log(numbers.join(" "));
    }
}
top5Integers('1')