//15. Най – голямото число сред 3
// Напишете JS функция, която намира най-голямото от 3 числа.
// Входът идва като масив.
// Изходът е най-големият от входните числа

function biggest([num1, num2, num3]){
    [num1, num2, num3] = [num1, num2, num3].map(Number);
    console.log(Math.max(num1, num2, num3));
}

biggest(['-2','67','90']);
biggest(['167','-21','34']);
biggest(['3333','2','54']);