function computerStore(arr) {
    let orderType="";
    let taxes=0;
    let sum=0;
    for(let i=0;i<arr.length;i++) {
        let productTax=0;
        if(arr[i]=="regular"||arr[i]=="special") {
            orderType=arr[i];
            break;
        }
        if(Number(arr[i])>=0) {
            productTax=Number(arr[i])*0.2;
            taxes=taxes+productTax;
            sum=sum+Number(arr[i]);
        } else {
            console.log("Invalid price!")
        }
    }
    let totalPrice=sum+taxes;
    let discount=0;
    if(orderType=="special") {
        discount=totalPrice*0.1;
    }
    totalPrice=totalPrice-discount
    if(totalPrice>0) {
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${sum.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log(`-----------`);
        console.log(`Total price: ${totalPrice.toFixed(2)}$`);
    } else {
        console.log("Invalid order!")
    }
}
computerStore(([
    'regular'
    ]))