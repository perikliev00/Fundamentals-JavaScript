function main(first,second,third) {
    let sumFirstAndSecond=sum(first,second)
    function sum(first,second) {
        return first+second;
    }
    function substract(sumFirstAndSecond,third) {
        return sumFirstAndSecond-third;
    }
    console.log(substract(sumFirstAndSecond,third))
}