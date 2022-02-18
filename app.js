const path = require('path');
const fs = require('fs');

// fs.mkdir(path.join(__dirname, 'lesson1_hw'), (err) => {
//     if (err) {
//         console.log(err);
//         throw err
//
//     }
// });
// fs.mkdir(path.join(__dirname, 'lesson1_hw', 'main', 'online'), {recursive: true}, (err) => {
//     if (err) {
//         console.log(err);
//         throw err
//
//     }
// });
// fs.mkdir(path.join(__dirname, 'lesson1_hw', 'main', 'inPerson'), {recursive: true}, (err) => {
//     if (err) {
//         console.log(err);
//         throw err
//
//     }
// });

// const onlineUsers = [
//     {name: "Dima", age: 20, city: "Kyiv"},
//     {name: "Kira", age: 21, city: "Kyiv"},
//     {name: "Lina", age: 22, city: "Lviv"},
// ];
//
// const inPersonUsers = [
//     {name: "Andrii", age: 22, city: "Lviv"},
//     {name: "Sasha", age: 21, city: "Kyiv"},
//     {name: "Anna", age: 24, city: "Lviv"},
// ];
//
// for (const onlineUser of onlineUsers) {
//     for (const key in onlineUser) {
//         fs.appendFile(path.join(__dirname, 'lesson1_hw', 'main', 'online', 'online.txt'),
//             `\n${key}:${onlineUser[key]};`, (err) => {
//                 if (err) {
//                     console.log(err);
//                     throw err
//                 }
//             })
//     }
// }
// for (const inPersonUser of inPersonUsers) {
//     for (const key in inPersonUser) {
//         fs.appendFile(path.join(__dirname, 'lesson1_hw', 'main', 'inPerson', 'inPerson.txt'),
//             `\n${key}:${inPersonUser[key]};`, (err) => {
//                 if (err) {
//                     console.log(err);
//                     throw err
//                 }
//             })
//     }
// }

const pathInPerson = path.join(__dirname, 'lesson1_hw', 'main', 'inPerson', 'inPerson.txt');
const pathOnline = path.join(__dirname, 'lesson1_hw', 'main', 'online', 'online.txt');

const exchangeFiles = () => {

    fs.readFile(pathInPerson, 'utf8', (err, inPersonData) => {
        if (err) {
            console.log(err);
            throw err;
        }
        fs.writeFile(pathOnline, inPersonData, (err) => {
            if (err) {
                console.log(err);
                throw err;
            }
        });
    });
    fs.readFile(pathOnline, 'utf8', ((err, onlineData) => {
        if (err) {
            console.log(err);
            throw err;
        }
        fs.writeFile(pathInPerson, onlineData, (err) => {
            if (err) {
                console.log(err);
                throw err;
            }
        });
    }));

};
exchangeFiles();
