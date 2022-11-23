function dayOfWeek(input) {
    let arr=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    if(input>0&&input<8) {
        for(let i=0;i<arr.length;i++) {
            if(i+1==input) {
                console.log(arr[i]);
           
        }
    }
} else {
    console.log("Invalid day!");
}
}
dayOfWeek(1)