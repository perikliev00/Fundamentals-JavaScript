function number(n) {
    for(let i=0;i<n;i++) {
        let firstLeather=String.fromCharCode(97+i);
        for(let j=0;j<n;j++) {
            let secondLeather=String.fromCharCode(97+j)
            for(let z=0;z<n;z++) {
                let thirdLeather=String.fromCharCode(97+z);
                console.log(firstLeather+secondLeather+thirdLeather)
            }
        } 
    } 
}