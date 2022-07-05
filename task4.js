function gap(begin, end){
    let current=begin;
    let output=setInterval(function(){
        console.log(current);
        if (current===end){
            clearInterval(output)
        } else {
            current++;
        }
    }, 1000);
}

let inputBegin=+prompt("Введите начало");
let inputEnd=+prompt("Введите конец");
gap(inputBegin,inputEnd)