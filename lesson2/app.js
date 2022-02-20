////cd lesson2 - вперед
////cd.. назад
////зупинити сервер ctrl+c
////frameworks: Express, Nest etc.
////nmp init that create package.json. for download libraries.
////npm i express
////node templates: handlebars -  npm express handlebars

////передаю першим шлях по якому перейде користувач, наст. контролер, що є колбеком(request, response)
////request, response це і є streams і приймають їх методи
//
// const users = [
//     {name: 'Anna',
//     city: 'Lviv'
//     },
//     {name: 'Inna',
//         city: 'Lviv'
//     },
//     {name: 'Lina',
//         city: 'Lviv'
//     }
// ];

const users = [
    {
        login: 'Anna',
        password: 'Lviv'
    },
    {
        login: 'Inna',
        password: 'Lviv'
    },
    {
        login: 'Lina',
        password: 'Lviv'
    }
];

// app.get('/welcome', (req, res) => {
//     // res.send('Hello from server')
//     res.json(users)
// })


const path = require('path');
const express = require('express');

const app = express();
////щоб апп бачила приймала файли json
app.use(express.json());
////щоб дані прийшли обєктом
app.use(express.urlencoded({extended: true}));

const {engine} = require('express-handlebars');
const {urlencoded} = require("express");

////налаштування що ми використовуватимемо express-handlebars
//// створюємо статичну директорію в lesson2

app.use(express.static(path.join(__dirname, 'static')));

////встановити двигуном hbs

app.set('view engine', '.hbs')

////звертаюся до аппб коли двигун буде спрацьовувати і бачити файли з розширенням .hbs,
////використовуй мій engine з handlebars
////engine({defaultLayout: false}) налаштування що будуть спрацбовувати тоді коли нода буде басити файли з розширенням
////.hbs {defaultLayout: false} - щоб не просило деревовидну структуру папок

app.engine('.hbs', engine({defaultLayout: false}));

////мої views будуть лежати по такому шляху
app.set('views', path.join(__dirname, 'static'));

//// _______________________________________________________
app.get('/login', (req, res) => {
    res.render('login')
});

app.get('/users', (req, res) => {
    res.render('users', {users})
});
app.get('/users/:userId', (req, res) => {
    // console.log(req.params)
    const {userId} = req.params;
    console.log(req.query)
    res.json(users[userId])
});


app.post('/login', (req, res) => {
    // console.log(req.body)
    users.push(req.body)
    res.redirect('/users')

})

////notFoundPage
app.use((req, res) => {
res.render('notFound')
})

app.listen(5200, () => {
    console.log('Server has started on PORT 5200');
})