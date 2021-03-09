//9. Площ на триъгълник
// Напишете JS функция, която изчислява площта на триъгълник по неговите 3 страни.
// https://www.mathopenref.com/heronsformula.html

function triangleArea(arr){
    arr = arr.map(Number);

    let sideA = arr[0];
    let sideB = arr[1];
    let sideC = arr[2];

    let semiperim = (sideA + sideB + sideC) / 2;

    let area = Math.sqrt(semiperim * (semiperim- sideA) * (semiperim- sideB) * (semiperim- sideC));

    console.log(area);
}

triangleArea(['3', '4', '5']);