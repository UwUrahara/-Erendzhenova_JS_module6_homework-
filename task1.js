function countEvenOdd(arr){
    let nEven = 0, nOdd=0, nZero=0;
    for (let i = 0; i < arr.length; i++){
        if ((arr[i] === null)||(arr[i] === 0)){
            nZero++;
        } else if ((typeof(arr[i])==="number")&&(isNaN(arr[i])===false)){
            if (arr[i]%2 === 0){
                nEven++;
            } else {nOdd++}
        }
    }
    if (nZero===0){ nZero="нет" }
    console.log(`В данном массиве ${nEven} четных элементов, ${nOdd} нечетных и ${nZero} нулевых`);
}

let arrEvenOdd=[1 , 2 , 3 , null , 0 , "apple" , 12]
countEvenOdd(arrEvenOdd)