function order(product,amount) {
    let result=0.00;
    if(product=="coffee") {
        result=amount*1.50;
    } else if(product=="water") {
        result=amount*1.00;
    } else if(product=="coke") {
        result=amount*1.40;
    } else if(product=="snacks") {
        result=amount*2.00
    }
    console.log(result.toFixed(2))
}