// hello world

let hello = "hello";
let world = "world";

let epicprase2 = `${hello} ${world}`;
console.log(epicprase2);


// concatenar un texto con otro texto

let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica`;
console.log(lorem2);


//

let person = {
    name: "oscar",
    age: 32,
    country: "mx"
}

console.log(person.name,)

let { name, age, } = person;
console.log(name, age,);


// mejor forma de aser una lista de personas

let team1 = ["oscar", "julian", "ricardo"];
let team2 = ["valeria", "yesica", "camila"];

let education = ["david", ...team1, ...team2];

console.log(education);


// (var) es escop gloval y (let) escop local

{
    var globalvar = "global var";
}

{
    let globallet = "global let";
    console.log(globallet);
}

console.log(globalvar);

//

let name = "oscar";
let age = 32;

obj2 = {name, age};

console.log(obj2);


// lista de nombres

const names = [
    {name: "oscar", age: 32 },
    {name: "yesica", age: 27}
]
let listofnames2 = names.map(item => console.log(item.name));


// ejecutando una promesa con aran fuction

const hellopromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("hey!");
        } else {
            reject("ups!!");
        }
    });
}

hellopromise()
.then(Response => console.log(response))
.then(() => console.log("hola"))
.catch(error => console.log(error));


// clases con metodo

class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

import {hello} from "./module";

hello();


// algoritmo logica como retornar nuestros elementos

function* helloworld() {
    if (true) {
        yield "hello, ";
    }
    if (true) {
        yield "world";
    }
};

const generatorhello = helloworld();
console.log(generatorhello.next().value);
console.log(generatorhello.next().value);
console.log(generatorhello.next().value);







