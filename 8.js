//8. Кутии и бутилки
// Напишете JS функция за да изчислите колко кутии ще са необходими, за да се поберат n на
// брой бутилки, ако всяка кутия отговаря на k на брой бутилки.
// Първият елемент е броя на бутилките, а вторият е вместимостта на една кутия.
// Изходът трябва да бъде отпечатан на конзолата.

function boxesAndBottles(bottles, capacity){
    let result = Math.ceil(bottles/capacity);
    console.log(result);
}

boxesAndBottles(20, 5);
boxesAndBottles(15, 7);