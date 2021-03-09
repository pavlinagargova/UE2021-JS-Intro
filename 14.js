//14. Присвояване на свойства
// Напишете JS функция, която съставя обект по зададени свойства.
// Вход
// ['name', 'Pesho', 'age', '23', 'gender', 'male']
// Изход
// {
//  name: 'Pesho',
//  age: '23',
//  gender: 'male'
// }

function props(arr){
    let object = {};
    object[arr[0]] = arr[1];
    object[arr[2]] = arr[3];
    object[arr[4]] = arr[5];

    console.log(object);
}

props(['name', 'viktor', 'age', '23', 'city', 'Varna']);
