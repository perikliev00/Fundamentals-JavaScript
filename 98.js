function spaceShipMission(arr) {
    let comands=arr[0].split(`||`);
    let fuel=Number(arr[1]);
    let ammo=Number(arr[2]);
    for(let i=0;i<comands.length;i++) {
        let comands2=comands[i].split(' ');
        if (comands2[0]=="Titan") {
            console.log(`You have reached Titan, all passengers are safe.`);
            break;
        } else if(comands2[0]=="Travel") {
            if(fuel>=Number(comands2[1])) {
                fuel=fuel-Number(comands2[1]);
                console.log(`The spaceship travelled ${comands2[1]} light-years.`)
            } else {
                console.log(`Mission failed.`);
                break;
            }
        } else if(comands2[0]=="Enemy") {
            if(ammo>=Number(comands2[1])) {
                ammo=ammo-Number(comands2[1]);
                console.log(`An enemy with ${comands2[1]} armour is defeated.`)
            } else if(fuel>=Number(comands2[1])*2) {
                fuel=fuel-Number(comands2[1])*2;
                console.log(`An enemy with ${comands2[1]} armour is outmaneuvered.`)
            } else {
                console.log(`Mission failed.`);
                break;
            }
        } else if(comands2[0]=="Repair") {
            ammo=ammo+Number(comands2[1])*2;
            fuel=fuel+Number(comands2[1]);
            console.log(`Ammunitions added: ${Number(comands2[1])*2}.`);
            console.log(`Fuel added: ${comands2[1]}.`);
        } 
    }
}
spaceShipMission([ 'Travel 10||Enemy 30||Repair 15||Titan', 
'50', 
'80' ])