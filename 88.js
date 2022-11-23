function districtArray(arr) {
    let length = arr.length;
    for (let i = 0; i < length; i++) {
        for (let j = arr.lenght; j < i+1; j--) {
            if (arr[i] == arr[i]) {
                arr.splice(j, 1)
            }
        }
    }
    console.log(arr.join(" "));
}
districtArray([1, 1, 1, 1, 1, 1])