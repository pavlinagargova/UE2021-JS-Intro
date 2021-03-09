//4. Площ на фигурата
// Напишете JS функция, която изчислява площта на
// фигурата вдясно по зададени стойности за w, h, W и H.
// Долният десен ъгъл винаги е общ за двата
// правоъгълника.
// Входът идва като масив от низови елементи, които
// трябва да бъдат обърнати към числа.
// Изходът трябва да бъде върнат в резултат на вашата
// функция.

function figureArea([w, h, W, H]){
    let fig1Area = Number(w) * Number(h);
    let fig2Area = Number(W) * Number(H);

    let commonArea = Math.min(Number(w), Number(W)) * Math.min(Number(h), Number(H));
    let figureArea = fig1Area + fig2Area - commonArea;

    console.log(figureArea);
}

figureArea(['2', '4', '5', '3']);