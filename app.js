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
// fs.appendFile(path.join(__dirname, 'app.js'), 'const onlineUsers=[{\nname: "Andrii", \nage: 22, \ncity: "Lviv" }];', (err) => {
//     if (err) {
//         console.log(err);
//         throw err
//
//     }
// });
// const onlineUsers = [{
//     name: "Andrii",
//     age: 22,
//     city: "Lviv"
// }];
// fs.appendFile(path.join(__dirname, 'app.js'), 'const inPersonUsers=[{\nname: "Andrii", \nage: 22, \ncity: "Lviv" }];', (err) => {
//     if (err) {
//         console.log(err);
//         throw err
//
//     }
// });
// const inPersonUsers = [{
//     name: "Andrii",
//     age: 22,
//     city: "Lviv"
// }];
//
// fs.writeFile(path.join(__dirname, 'lesson1_hw', 'main', 'online', 'online.txt'), 'const onlineUsers=[{\nname: "Andrii", \nage: 22, \ncity: "Lviv" }];', (err) => {
//     if (err) {
//         console.log(err);
//         throw err
//
//     }
// });
// fs.writeFile(path.join(__dirname, 'lesson1_hw', 'main', 'inPerson', 'inPerson.txt'), 'const inPersonUsers=[{\nname: "Andrii", \nage: 22, \ncity: "Lviv" }];', (err) => {
//     if (err) {
//         console.log(err);
//         throw err
//
//     }
// });

//
// const exchangeFiles = () => {
//     if (path.join(__dirname, 'lesson1_hw', 'main', 'online', 'online.txt')) {
//
//         fs.rename(path.join(__dirname, 'lesson1_hw', 'main', 'online', 'online.txt'), path.join(__dirname, 'lesson1_hw', 'main', 'inPerson', 'inPerson.txt'),
//             (err) => {
//                 if (err) {
//                     console.log(err);
//
//                 }
//             });
//
//     }
//     if (path.join(__dirname, 'lesson1_hw', 'main', 'inPerson', 'inPerson.txt')) {
//         fs.rename(path.join(__dirname, 'lesson1_hw', 'main', 'inPerson', 'inPerson.txt'), path.join(__dirname, 'lesson1_hw', 'main', 'online', 'online.txt'),
//             (err) => {
//                 if (err) {
//                     console.log(err);
//
//                 }
//             });
//
//     }
// };
// exchangeFiles();


// const exchangeFiles = () => {
//     switch (path.join(__dirname, 'lesson1_hw', 'main', 'online', 'online.txt')) {
//
//         case path.join(__dirname, 'lesson1_hw', 'main', 'online', 'online.txt'):
//
//             fs.rename(path.join(__dirname, 'lesson1_hw', 'main', 'online', 'online.txt'), path.join(__dirname, 'lesson1_hw', 'main', 'inPerson', 'inPerson.txt'),
//                 (err) => {
//                     if (err) {
//                         console.log(err);
//
//                     }
//                 });
//             break;
//
//     }
//     switch (path.join(__dirname, 'lesson1_hw', 'main', 'inPerson', 'inPerson.txt')) {
//         case path.join(__dirname, 'lesson1_hw', 'main', 'inPerson', 'inPerson.txt'):
//             fs.rename(path.join(__dirname, 'lesson1_hw', 'main', 'inPerson', 'inPerson.txt'), path.join(__dirname, 'lesson1_hw', 'main', 'online', 'online.txt'),
//                 (err) => {
//                     if (err) {
//                         console.log(err);
//
//                     }
//                 });
//             break;
//     }
// };
// exchangeFiles();
