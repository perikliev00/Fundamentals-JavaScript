function palindrome(arr) {
    for (let i = 0; i < arr.length; i++) {
        let string = String(arr[i]);
        let palindromee = "";
        for (let x = string.length - 1; x >= 0; x--) {
            palindromee = palindromee + string[x];
        }
        if (string == palindromee) {
            console.log("true");
        } else {
            console.log("false");
        }
    }
}
palindrome([111, 123])