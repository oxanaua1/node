const path = require('path');
const fs = require('fs');

////task-1
// fs.mkdir(path.join(__dirname, 'lesson1_cw'), (err) => {
//     if (err) {
//         console.log(err);
//         throw err
//     }
//
//     fs.writeFile(path.join(__dirname, 'lesson1_cw', 'user.txt'), 'info about user', (err) => {
//         if (err) {
//             console.log(err);
//             throw err
//         }
//
//         fs.readFile(path.join(__dirname, 'lesson1_cw', 'user.txt'), (err, data) => {
//                 if (err) {
//                     console.log(err);
//                     throw err
//                 }
//
//                 if (data) {
//                     fs.writeFile(path.join(__dirname, 'lesson1_cw', 'userNew.txt'), `${data}`, (err) => {
//                             if (err) {
//                                 console.log(err);
//                                 throw err
//                             }
//                         }
//                     );
//                 }
//             }
//         )
//     })
//
// })

////task-2
////create a file with info

// for (let i = 0; i < 30; i++) {
//     fs.writeFile(path.join(__dirname, 'lesson1_cw', 'task2.txt'),
//         '\ninteresting facts', {flag: 'a'},
//         (err) => {
//             if (err) {
//                 console.log(err);
//                 throw err;
//             }
//         })
// }
//
// //create new file with old file data + delete old file
//
// fs.readFile(path.join(__dirname, 'lesson1_cw', 'task2.txt'), (err, data) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
//     fs.mkdir(path.join(__dirname, 'lesson1_cw', 'main'), (err) => {
//         if (err) {
//             console.log(err);
//             throw err;
//         }
//     })
//
//     if (data) {
//         fs.writeFile(path.join(__dirname, 'lesson1_cw', 'main', 'task2New.txt'), `${data}`, (err) => {
//             if (err) {
//                 console.log(err);
//                 throw err;
//             }
//         })
//         fs.unlink(path.join(__dirname, 'lesson1_cw', 'task2.txt'), (err) => {
//             if (err) {
//                 console.log(err);
//                 throw err;
//             }
//         })
//     }
// });

////task-3

///create directory

// fs.mkdir(path.join(__dirname, 'lesson1_cw', 'task'),
//     {recursive: true},
//     (err) => {
//         if (err) {
//             console.log(err);
//             throw err;
//         }
//     })

////create new directories and files with data
//
// const creator = () => {
//     for (let i = 1; i <= 5; i++) {
//
//         fs.mkdir(path.join(__dirname, 'lesson1_cw', 'task', `user-${i}`),
//             {recursive: true},
//             (err) => {
//                 if (err) {
//                     console.log(err);
//                     throw err;
//                 }
//                 if (i <= 2) {
//                     fs.writeFile(path.join(__dirname, 'lesson1_cw', 'task', `userDetails-${i}.txt`),
//                         '\n UserInfo, details',
//                         (err) => {
//                             if (err) {
//                                 console.log(err);
//                                 throw err;
//                             }
//                         });
//                 }
//             });
//     }
//
// }
// creator();

//// create function for delete files's data & rename directories 'new'

const changeFiles = () => {
    fs.readdir(path.join(__dirname, 'lesson1_cw', 'task'),
        {withFileTypes: true},
        (err, dataDirs) => {
            if (err) {
                console.log(err)
                throw err;
            }
            dataDirs.forEach((file) => {
                console.log(file.name)


                if (file.isFile()) {

                    fs.truncate(path.join(__dirname, 'lesson1_cw', 'task', `${file.name}`),
                        0,
                        (err) => {
                            if (err) {
                                console.log(err)
                                throw err;
                            }
                        });
                } else {
                    fs.rename(
                        path.join(__dirname, 'lesson1_cw', 'task', `${file.name}`),
                        path.join(__dirname, 'lesson1_cw', 'task', `New_${file.name}`),
                        (err) => {
                            if (err) {
                                console.log(err)
                                throw err;
                            }
                        });


                }
            });

        });

};


changeFiles();

