let array = [];

function createArray() {
    for (let i = 0; i < 5; i++) {
        array.push(prompt("Введите " + i + " элемент массива"));
    }
}

function deleteArray() {
    array = [];
}

function checkArray() {
    let indices = [];
    let elementToCheck = prompt("Введите элемент для проверки")
    for (let i = 0; i < array.length; i++) {
        if (array[i] === elementToCheck) {
            indices.push(i);
        }
    }
    if (indices.length) {
        alert("элементы нахожятся под индексами: " + indices);
    } else {
        array.push(elementToCheck);
        alert(elementToCheck + " добавлен");
    }
}
