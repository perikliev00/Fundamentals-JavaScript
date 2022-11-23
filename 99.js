function library(arr) {
    let books=arr[0].split("&");
    for(let i=1;i<arr.length;i++) {
        let comands=arr[i].split(" | ");
        if(comands[0]=="Done") {
            break;
        } else if(comands[0]=="Add Book") {
            if(books.includes(comands[1])==false) {
                books.unshift(comands[1]);
            } else {

            }
        } else if(comands[0]=="Take Book") {
            if(books.includes(comands[1])) {
                books.splice(books.indexOf(comands[1]),1);
            } else {

            }
        } else if(comands[0]=="Swap Books") {
            if(books.includes(comands[1])==true&&books.includes(comands[2])==true) {
                let bufer=books[books.indexOf(comands[1])];
                let bufer2=books.indexOf(comands[2]);
                books[books.indexOf(comands[1])]=books[books.indexOf(comands[2])];
                books[bufer2]=bufer;
            } else {

            }
        } else if(comands[0]=="Insert Book") {
            if(books.includes(comands[1])==false) {
                books.push(comands[1]);
            } else {

            }
        } else if(comands[0]=="Check Book") {
            if(books.length-1>=Number(comands[1])) {
                console.log(books[Number(comands[1])]);
            } else {

            }
        }
    }
    console.log(books.join(", "));
}
library(["Don Quixote&The Great Gatsby&Moby Dick",
"Add Book | Ulysses",
"Take Book | Don Quixote",
"Insert Book | Alice's Adventures in Wonderland",
"Done"])