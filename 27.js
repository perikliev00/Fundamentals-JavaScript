function rightPlace(str,c,str1) {
    let result="";
    let len=str.length;
    for(let i=0;i<len;i++) {
        if(str[i]=="_") {
            result=result+c
        } else {

        
        result=result+str[i];
    }
    }
    if(result==str1) {
        console.log("Matched")
    } else {
        console.log("Not Matched")
    }
} 
rightPlace("Str_ng",
    "i",
    "String")