function vacation(people,type,day) {
    let price=0;
    let sum=0;
    let discount=0;
    if(day=="Friday") {
        if(type=="Students"){
            price=8.45;
        } else if(type=="Business") {
            price=10.90;
        } else if(type=="Regular") {
            price=15;
        }
    }  if(day=="Saturday") {
        if(type=="Students"){
            price=9.80;
        } else if(type=="Business") {
            price=15.60;
        } else if(type=="Regular") {
            price=20;
        }
    }  if(day=="Sunday") {
        if(type=="Students"){
            price=10.46;
        } else if(type=="Business") {
            price=16;
        } else if(type=="Regular") {
            price=22.5;
        }
    }
    if(type=="Students"&&people>=30) {
        discount=0.15;
    } else if(type=="Business"&&people>=100) {
        people=people-10;
    } else if(type=="Regular"&&people>=10&&people<=20) {
        discount=0.05
    }
    sum=people*price;
    discount=sum*discount;
    sum=sum-discount;
    console.log(`Total price: ${sum.toFixed(2)}`);
}