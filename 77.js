function loadingBar(number) {
    let arr = []
    for (let i = 1; i <= 10; i++) {
        if (i <= number/10) {
            arr.push("%")
        } else {
            arr.push(".")
        }
    }
    if(number==100) {
        console.log(`100% Complete!`)
    } else {
        console.log(`${number}% [${arr.join("")}]`)
        console.log(`Still loading...`)
    }
}
loadingBar(50)