function pyramide(base,increment) {
    let totalStone=0;
    let totalLapis=0;
    let totalGold=0;
    let totalMarbel=0;
    let j=0;
    for(let i=base;i>=1;i=i-2) {
        j=j+1;
        if(j%5==0) {
            totalStone=totalStone+(((i-2)*(i-2)).increment);
            totalLapis=totalLapis+(4*i-4);
        } else if(i<=2) {
            totalGold=i*i;
        } else {
            totalStone=totalStone+(((i-2)*(i-2)).increment);
            totalMarbel=totalMarbel+(4*i-4);
        }
    }
    let height=Math.floor(j*increment);
    console.log(`Stone required: ${Math.ceil(totalStone)}`)
    console.log(`Marble required: ${Math.ceil(totalMarbel)}`)
    console.log(`Lapis Lazuli required: ${Math.ceil(totalLapis)}`)
    console.log(`Gold required: ${totalGold}`)
    console.log(`Final pyramid height: ${(height)}`)
}