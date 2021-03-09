//10. Обем и повърхност на конус
// Напишете JS функция за да изчислите обема и повърхността на конус по зададена височина
// и радиус на основата.
// Входът идва като масив от два елемента. Първият елемент е радиусът на конуса, а вторият е
// неговата височина.
// Изходът трябва да бъде отпечатан на конзолата на нов ред за всеки резултат.
// https://www.calculatorsoup.com/calculators/geometry-solids/cone.php

function coneTask(a, b) {
    let s = Math.sqrt(a * a + b * b);
    let volume = Math.PI * a * a * b / 3;
    console.log("Обемът е = " + volume);

    let area = Math.PI * a * (a + s);
    console.log("Площта е = " + area);
}


coneTask(2, 4);