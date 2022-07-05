const exponentiation = (x, n) => {
    let xNew=1;
    for (let i=0; i<n; i++){
        xNew=x*xNew;
    }
    console.log(xNew);
};

let num=+prompt("Введите число");
let degree=+prompt("Введите степень");
exponentiation(num, degree)