//Imports de los módulos

const fs = require('fs/promises');
const path = require('path');

const usersRequirement = path.resolve('users.json');
const writeRequeriment = path.resolve('hello.txt');

const readFileUsers = async () => {
    //Imprimir en consola el arreglo de usuarios
    try {
        const data = await fs.readFile(usersRequirement, "utf8");
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

const writeHelloWorld = async () => {
    //Escribir hello world! en el archivo hello.txt
    try {
        await fs.writeFile(writeRequeriment, "hello world!");
    } catch (error) {
        console.log(error);
    }
};

const addUser = async (username) => {
    //Agregar un usuario en la lista users.json
    try {
        const data = await fs.readFile(usersRequirement, "utf8");
        const usersList = JSON.parse(data);
        usersList.push(username);
        await fs.writeFile(usersRequirement, JSON.stringify(usersList));
    } catch (error) {
        console.log(error);
    }
};

//No hace falta ejecutar las funciones

module.exports = {
    readFileUsers,
    writeHelloWorld,
    addUser,
};