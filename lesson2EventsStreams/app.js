////events:
// const {EventEmitter} = require('events');
// const ee = new EventEmitter();
// ee.on('Log', (name)=>{
//     console.log(`Log is working, ${name}`)
// });
//
// ////івент викликається за доп emit, можна викл багато разів
// // ee.emit('Log', 'Oxana');
// // ee.emit('Log', 'Oxana');
// // ee.emit('Log', 'Oxana');
// // ee.emit('Log', 'Oxana');
//
// ////щоб раз спрацював викор. once
// ee.once('test',()=>{
//     console.log('once is working')
// } );
// ee.emit('test');
// ee.emit('test');
// ee.emit('test');
//
// console.log(ee.eventNames()); ////=>'Log'


////streams:
const fs = require('fs');
const path = require('path');


// const readStream = fs.createReadStream(path.join(__dirname, 'test'));

// ////стріми читаються на івент data(назва події за замовчуванням), chunk - інф прилітає частинами і як правило наз chunk

// readStream.on('data', (chunk )=> {
//     console.log(chunk.toString())
// })

//// записати стріми
// const writeStream = fs.createWriteStream(path.join(__dirname,'fileTest.txt'));
//
// writeStream.write('new data', (err) => {
//     if (err){
//         console.log(err);
//         throw err;
//     }
// });
// writeStream.end();

// for (let i = 0; i < 500; i++) {
//     writeStream.write('new data \n', (err) => {
//         if (err){
//             console.log(err);
//             throw err;
//         }
//     });
//
// }
// writeStream.end();
////read and write file file :

// const readStream = fs.createReadStream(path.join(__dirname, 'test2.txt'));
// const writeStream = fs.createWriteStream(path.join(__dirname, 'fileTest.txt'));
//
// readStream.on('data', (chunk) => {
//     // console.log(chunk.toString())
//     writeStream.write(chunk, (err) => {
//         if (err) {
//             console.log(err);
//             throw err;
//         }
//     });
//     writeStream.end();
// })

////method pipe:
// const readStream = fs.createReadStream(path.join(__dirname, 'test2.txt'));
// const writeStream = fs.createWriteStream(path.join(__dirname, 'fileTest.txt'));
// readStream.pipe(writeStream);

////streams:
////readable -readStream
////writable -writeStream
////duplex - pipe
////transformed - read and write z-file(archive)

