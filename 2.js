// 2. Сума и ДДС
// Напишете JS функция, която сумира променлив брой цени и изчислява тяхното ДДС (данък
// върху добавената стойност, 20%).
// Входът идва като масив от низови елементи, които трябва да бъдат обърнати към числа.
//     Броят на елементите ще бъде различен.
//     Изходът трябва да съдържа сумата, ддс-то и крайното салдо.

    function calcSumAndVat(arr){
    let sum = 0;
    for(let price of arr){
        sum += Number(price);
    }
    console.log('Sum: ' + sum);

    let vat = sum * 0.2;
    console.log('Vat: ' + vat);
    let total = sum + vat;
    console.log('Total: ' + total);
}

calcSumAndVat(['1.20', '2.60', '3.50']);