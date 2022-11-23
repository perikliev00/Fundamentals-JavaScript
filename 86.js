function solve(comands) {
    function add(el) {
        arr.push(el);
    }
    function remove(el) {
        arr=arr.filter(x => x!=el);
    }
    function removeAt(el) {
        arr.splice(el,1);
    }
    function insert(number,index) { 
        arr.splice(index,0,number);
    }
    let arr=comands[0].split(' ').map(Number);
    for(let i=1;i<comands.length;i++) {
        let numberOne=0;
        let numberTwo=0;
        let operation=comands[i].split(' ');
        numberOne=Number(operation[1]);
        numberTwo=Number(operation[2]);
        if(operation[0]=="Add") {
            add(numberOne);
        } else if(operation[0]=="Remove") {
            remove(numberOne);
        } else if(operation[0]=="RemoveAt") {
            removeAt(numberOne);
        } else if(operation[0]=="Insert") {
            insert(numberOne,numberTwo);
        }
    }
    console.log(arr.join(" "));
}
solve(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3'])