const data = {
    frontend: "oscar",
    backend: "isabel",
    design: "ana",
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);


//  Object ba con la primera letra O en mayuscula

const data = {
    frontend: "oscar",
    backend: "isabel",
    design: "ana",
}

// 

const values = Object.values(data);
console.log(values);
console.log(values.length);

// añadiendo caracteres

const string = "hello";
console.log(string.padStart(7,"hi"))
console.log(string.padEnd(12, "kkkkk"))
console.log("food".padEnd(12, "kkkkk"))


//async await

const helloworld = () => {
    return new Promise((resolve, reject) => {
        (false)
        ? setTimeout(() => resolve("hello world"), 3000)
        : reject(new Error("test Error"))
       
    })
};

const helloAsync = async () => {
    const hello = await helloworld();
    console.log(hello);
};

helloAsync();

const anotherfunction = async () => {
    try {
        const hello = await helloworld();
        console.log(hello);
    }
    catch (error) {
        console.log(error);
    }
};

anotherfunction();
