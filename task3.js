/*
Написать функцию, которая создает пустой объект, но без прототипа
*/

function create_empty_obj() {
    const emptyObj = Object.create(null)
    return emptyObj
}

// console.log(create_empty_obj())