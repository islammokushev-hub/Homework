// Создать переменные разных типов данных:
// строка (имя)
// число (возраст)
// логическое значение (например, isStudent)
// null
// undefined

let name = "islam"  
let age = 20;
let isStudent = true;
let ull = null;
let cripto;

console.log(name)
console.log(age)
console.log(isStudent)
console.log(ull)
console.log(cripto)

console.log(typeof name)
console.log(typeof age)
console.log(typeof isStudent)
console.log(typeof ull)
console.log(typeof cripto)
////////////////////////////////////////////////////////////////////////////////////////////////////////

// Создать объект person с полями: name, age, isStudent
// Вывести в консоль информацию о персоне в одном сообщении 
// как: Меня зовут Али, мне 20 лет. Информацию надо брать с созданного объекта

let person = {
    name: "islam",
    age: 20,
    isStudent: "студент"
}
console.log(`Меня зовут ${person.name}, мне ${person.age} лет, я ${person.isStudent}`)

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// Создать массив из 5 любимых фильмов, игр или книг и вывести его в консоль. ( Изучите массивы )


const anime = [
        "пожиратель звёзд",
        "боевой континент",
        "раскол битва синего небес",
        "путешествие к бессмертию",
        "восставший против неба",
]
console.log(anime)