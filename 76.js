function perfectNumber(number) {
    let arr = [];
    let sum = 0;
    for (let i = 0; i < number; i++) {
        if (number % i == 0) {
            arr.push(i);
        }
    }
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    if (number == sum) {
        console.log("We have a perfect number!")
    } else {
        console.log("It's not so perfect.")
    }
}
perfectNumber(13131)