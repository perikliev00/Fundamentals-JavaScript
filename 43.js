function gladiator(fightCount,helmetPrice,swordPrice,shieldPrice,armorPrice) {
    let shield=0;
    let armor=0;
    let sword=0;
    let helmet=0;
    helmet=Math.floor(fightCount/2);
    sword=Math.floor(fightCount/3);
    shield=Math.floor(fightCount/4);
    armor=Math.floor(fightCount/4/2);
    let sum=(helmet*helmetPrice+sword*swordPrice+shield*shieldPrice+armor*armorPrice).toFixed(2);
    console.log(`Gladiator expenses: ${sum} aureus`);
}
gladiator(23,12.50,21.50,40,200);