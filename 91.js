function bombNumbers(arr, specialBomb) {
    let bombs=arr;
    let specialBombNumber = specialBomb[0];
    let bombPower = specialBomb[1];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == specialBombNumber) {
            for (let x = 0; x < bombPower; x++) {
                bombs.splice(bombs.indexOf(specialBombNumber)+1, 1);
            }
            for (let y = 0; y < bombPower; y++) {
                bombs.splice(bombs.indexOf(specialBombNumber)-1,1);
            }
            bombs.splice(bombs.indexOf(specialBombNumber),1);
        }
    }
    let sum=0;
    for(let i=0;i<bombs.length;i++) {
        sum=sum+bombs[i];
    }
    console.log(sum);
}
bombNumbers([2],
    [2, 1])