//5. Високосна година
// Напишете JS функция, за да проверите дали една година е високосна. Високосните години са
// или делящи се на 4, но не и на 100, или са делими на 400.
// Изходът на конзолата да показва Yes/No.

function isLeapYear(year){
    let condOne = year % 4 === 0 && year % 100 !== 0;
    let condTwo = year % 400 === 0;

    if(condOne || condTwo){
        console.log('Yes');
        return;
    }

    console.log('No');
}

isLeapYear(1999);
isLeapYear(2020);