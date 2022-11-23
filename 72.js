function main(first,second) {
    let a=first;
    let b=second;
    let arr=[];    
    putBggerelementAtFirst(first,second);
    pushArr();
    console.log(arr.join(" "))
    function pushArr() {
        for(let i=a.charCodeAt(0)+1;i<=b.charCodeAt(0)-1;i++) {
            arr.push(String.fromCharCode(i));
        }
    }
    function putBggerelementAtFirst(first,second) {
        if(first.charCodeAt(0)>second.charCodeAt(0)) {
            let i=b;
            b=a;
            a=i;
        }
    }
}
main("a","4")