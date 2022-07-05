function simpleNums(x){
    if (x<2) {
        console.log(`${x} не является ни простым, ни составным числом.`)
    } else if (x>1000) {
        console.log("Ошибка.")
    } else {
        let i=2, f=false;
        while ((f===false)&&(i<x)) {
            if (x%i === 0) {f=true};
            i++;
        }
        if (f===true) {
            console.log(`${x} является составным числом.`)
        } else {
            console.log(`${x} является простым числом.`)
        }
    }
}
let num = +prompt("Введите число меньше 1000, чтобы определить составное оно или простое.")
simpleNums(num)