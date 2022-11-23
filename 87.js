function train(arr) {
    function addWagon(el) {
        wagons.push(Number(el));
    }
    let wagons=arr[0].split(' ').map(Number);
    let maxPasangers=Number(arr[1]);
    for(let i=2;i<arr.length;i++) {
        let operation=arr[i].split(' ');
        if(operation[0]=="Add") {
            addWagon(operation[1]);
        } else {
            for(let i=0;i<wagons.length;i++) {
                if(wagons[i]+Number(operation[0])<=maxPasangers) {
                    wagons[i]=wagons[i]+Number(operation[0])
                    break;
                }
            }
        }
    }
    console.log(wagons.join(" "))
}
train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75'])