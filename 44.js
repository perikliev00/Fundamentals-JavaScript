function spiceMustFlow(startingYeald) {
    let day=0;;
    let total=0;
    for(let i=1;startingYeald>=100;i++) {
        day=i;
        total=total+startingYeald;
        if(total>26) {
            total=total-26;
        }
        startingYeald=startingYeald-10;
    }
    if(total>26) {
        total=total-26;
    }
    console.log(day);
    console.log(total);
}
spiceMustFlow(111)