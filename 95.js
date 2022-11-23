function tresuerHunt(arr) {
    let items=arr[0].split("|");
    for(let i=1;i<arr.length;i++) {
        let comands=arr[i].split(' ');
        if(comands[0]=="Yohoho!") {
            break;
        } else if(comands[0]=="Loot") {
            for(let x=1;x<comands.length;x++) {
                if(items.includes(comands[x])==true) {

                } else {
                    items.unshift(comands[x]);
                } 
            }
        } else if(comands[0]=="Drop") {
            if(Number(comands[1])<=items.length-1) {
                let item=items.splice(comands[1],1);
                items.push(item);
            }
        } else if(comands[0]=="Steal") {
            if(items.length>=comands[1]) {
                let stealEl=items.splice(items.length-comands[1],comands[1]);
                console.log(stealEl.join(", "));
            } else {
                let stealEl=items.splice(0,arr.length)
                console.log(stealEl.join(", "));
            }
        }
    }
    let sum=0;
    for(let i=0;i<items.length;i++) {
        sum=sum+items[i].length;
    }
    sum=sum/items.length;
    if(sum>0) {
        console.log(`Average treasure gain: ${sum.toFixed(2)} pirate credits.`)
    } else {
        console.log(`Failed treasure hunt.`);
    }
}
tresuerHunt((["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"]))