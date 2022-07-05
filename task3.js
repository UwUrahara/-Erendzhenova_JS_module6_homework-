function result(a){
    let num2=+prompt("Введите второе число");
    function getSumm(b){
        return a+b;
    }
    return getSumm(num2)
}

let num1=+prompt("Введите первое число");
console.log(result(num1))