/*
Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.
*/

function valid_property(string,obj) {
    return obj.hasOwnProperty(string)     
}


// const person = {

//     city: "Moscow",
//     country: "Russia"
   
// }

// const student = Object.create(person);
// student.ownCity = "Piter";
// student.house = "World";
// student.age = 23;

// console.log(valid_property("age",student))