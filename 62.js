function dungeonsDark(input) {
    let str=""
    str=input[0];
    let health=100;
    let coins=0;
    let r=0;
    let arr=["",""];
    let bestRoom=0;
    for(let i=0;i<str.length;i++) {
        i=r
        let j=0;
        bestRoom++
        if(str[i]=="|") {
            r++;
        }
        for(let x=r;str[x]!="|";r++) {
            if(x>str.length-1) {
            break;
            }
            if(str[x]===" ") {
                j=1;
                x++;
            }
            if(j==0) {
                arr[0]=arr[0]+str[x];
            } else {
                arr[1]=arr[1]+str[x];
            }
            x++;
        } 
        r++;
        if(arr[0]=="potion") {
            let temp=health;
            health=health+Number(arr[1]);
            if(health>100) {
                health=100;
                console.log(`You healed for ${health-temp} hp.`)
            } else {
                console.log(`You healed for ${arr[1]} hp.`)
            }
            console.log(`Current health: ${health} hp.`)
        } else if(arr[0]=="chest") {
            coins=coins+Number(arr[1]);
            console.log(`You found ${arr[1]} coins.`)
        } else {
            health=health-Number(arr[1]);
            if(health>0) {
                if(i==str.length) {
                    console.log(`You've made it!`);
                    console.log(`Coins: ${coins}`);
                    console.log(`Health: ${health}`);
                } else {
                console.log(`You slayed ${arr[0]}.`)
                }
            } else {
                console.log(`You died! Killed by ${arr[0]}.`)
                console.log(`Best room: ${bestRoom}`)
                break;
            } 
        }
        arr=["",""]
    }
}
dungeonsDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])