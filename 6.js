//6. Низ от числа 1 ... N
// Напишете JS функция, която чете число n като вход и отпечатва всички числа от 1 до n,
// слепени едно до дтуго.
// Изходът трябва да бъде отпечатан на конзолата.
function stringOfNumbers(lastNum){
    let result = '';
    for(let i = 1; i<= lastNum; i++){
        result += i;
    }

    console.log(result);
}

stringOfNumbers(10);
stringOfNumbers(20);
stringOfNumbers(30);
stringOfNumbers(40);