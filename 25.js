function echo(a) {
    console.log(typeof(a));
    if(typeof(a)=="number"||typeof(a)=="string") {
        console.log(a);
    } else {
        console.log("Parameter is not suitable for printing")
    }
}