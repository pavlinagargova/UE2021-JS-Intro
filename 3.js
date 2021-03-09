//3. Буква в низ
// Напишете JS функция, която отчита колко пъти се появява определена буква в даден низ.
// Входът идва като масив. Първият елемент е низът за проверка, а вторият елемент е буквата
// за броене.
// Изходът трябва да бъде върнат в резултат на функцията.

function countLetter([string, letter]){
    let count = 0;

    for(let char of string){
        console.log(char);
        if(char === letter){
            count++;
        }
    }

    console.log('Count is: ' + count);
}

countLetter(['hello', 'l']);