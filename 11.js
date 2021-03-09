//11. Четно или Нечетно
// Напишете JS функция, която проверява дали число е нечетно,четно или невалидно (дробите
// не са нито нечетни, нито четни).
// Изходът трябва да бъде отпечатан на конзолата.

function oddOrEven(number){

    if(number % 1 === 0){
        if(number % 2 === 0){
            console.log("even");
        }else{
            console.log("odd");
        }
    } else{
        console.log('invalid number');
    }
}

oddOrEven(6);
oddOrEven(7);
oddOrEven(1.50);