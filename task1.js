/*
Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.
*/

function list_of_valid_property(obj) {
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            console.log(i)
        }
    }
}

// const person = {

//     city: "Moscow",
//     country: "Russia"
   
// }

// const student = Object.create(person);
// student.ownCity = "Piter";
// student.house = "World";
// student.age = 23;

// list_of_valid_property(student)