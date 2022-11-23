function factoriel(numb1,numb2) {
    let fact1=1;
    let fact2=1;
    for(let i=1;i<=numb1;i++) {
        fact1=fact1*i;
    }
    for(let i=1;i<=numb2;i++) {
        fact2=fact2*i;
    }
    console.log((fact1/fact2).toFixed(2));
}
factoriel(5,2)