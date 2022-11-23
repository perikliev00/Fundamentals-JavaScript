function houseParty(arr) {
    let list=[];
    for(let i=0;i<arr.length;i++) {
        let guest=arr[i].split(" ");
        if(guest[2]=="going!") {
            if(list.includes(guest[0])==false) {
                list.push(guest[0]);
            } else {
                console.log(`${guest[0]} is already in the list!`);
            }
        } else {
            if(list.includes(guest[0])==true) {
                list.splice(list.indexOf(guest[0]),1);
            } else {
                console.log(`${guest[0]} is not in the list!`);
            }
        }
    }
    for(let i=0;i<list.length;i++) {
        console.log(list[i]);
    }
}
houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!'])