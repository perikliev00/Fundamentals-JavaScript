function negativeOrPositive(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        
        if (Number(arr[i]) >= 0) {
            result.push(arr[i]);
        } else {
            result.unshift(arr[i]);
        }
    }
    for (let i = 0; i < result.length; i++) {
        console.log(result[i]);
    }
}