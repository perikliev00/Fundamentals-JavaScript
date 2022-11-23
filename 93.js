function arrayManipulayor(numbers,comands) {
    function add(index,element) {
        numbers.splice(index,0,element);
    }
    function contains(el) {
        console.log(numbers.indexOf(Number(el)));
    }
    function remove(index) {
        numbers.splice(index,1);
    }
    function shift(position) {
        for(let i=position;i<numbers.length;i++) {
            numbers.shift(numbers[i]);
        }
    }
    function sumPairs() {
        let pairArr=[];
        for(let i=0;i<numbers.length;i+2) {
            let sum=numbers[i]+numbers[i+1];
            pairArr.push(sum);
        }
        numbers=pairArr;
    }
    for(let i=0;i<comands.length;i++) {
        let arr=comands[i].split(" ");
        if(arr[0]=="add") {
            add(arr[1],arr[2]);
        } else if(arr[0]=="addMany") {
            for(let x=2;x<arr.length;x++) {
                add(arr[1],arr[x]);
            }
        } else if(arr[0]=="contains") {
            contains(arr[1]);
        } else if(arr[0]=="remove") {
            remove(arr[1]);
        } else if(arr[0]=="shift") {
            shift(arr[1]);
        } else if(arr[0]=="sumPairs") {
            sumPairs();
        } else if(arr[0]=="print") {
            console.log(`[ ${numbers.join(", ")} ]`)
        }
    }
}
arrayManipulayor([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print'])