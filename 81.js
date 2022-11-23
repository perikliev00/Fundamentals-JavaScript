function lastKElements(arr) {
    let k=arr.shift();
    let firstKNumbers=arr.slice(0,k);
    let lastKNumbers=arr.slice(-k);
    console.log(firstKNumbers.join(" "));
    console.log(lastKNumbers.join(" "));
}
lastKElements([2,1,2,3,4,45])