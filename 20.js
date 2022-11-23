function login(arr) {
    let username=arr[0];
    let pass="";
    let length=username.length;
    for(let i=length-1;i>=0;i--) {
        pass=pass+username[i];
    }
    for(let i=1;i<=4;i++) {
        if(arr[i]==pass) {
            console.log(`User ${username} logged in.`)
            break;
        } else if(i==4&&arr[i]!=pass){
            console.log(`User ${username} blocked!`)
        } else {
            console.log("Incorrect password. Try again.")
        }
    }
}
login(["Alex","xelA"])