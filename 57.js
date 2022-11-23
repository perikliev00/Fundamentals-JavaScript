function arrRotation (arr,num) {
    let a=0;
    for(let i=0;i<num;i++) { 
        a=0
        for(let x=0;x<arr.length-1;x++) {
        a=arr[x+1];
        arr[x+1]=arr[x];
        arr[x]=a;
    }
}
    console.log(arr.join(" "));
}
arrRotation([51, 47, 32, 61, 21],2)