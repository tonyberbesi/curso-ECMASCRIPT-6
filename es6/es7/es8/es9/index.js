const obj = {
    name: "luis",
    age: "30",
    country: "colom"
};

let {name, ...all } = obj;
console.log(name, all);


//

const helloworld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve("hello world"), 3000)
        : reject(new Error("test Error"))
    });
};

helloworld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log("finalizo"))