function reverseStr(str) {
    let result="";
    let len=str.length;
    for(let i=len-1;i>=0;i--) {
        result=result+str[i];
    }
    console.log(result);
}