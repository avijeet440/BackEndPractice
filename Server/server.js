//Common js
// const express = require('express')
//module js

//Creating server using Express JS
// import express from 'express';
// const app = express();

// app.get('/', (req, res) => {
//     res.send(
//         [{
//             name: 'Aman',
//             age: 20,
//         },
//         {
//             name: 'Avishek',
//             age: 20,
//         },
//         {
//             name: 'Avishek vandra',
//             age: 20
//         }]
//     );
// })

// app.get('/about', (req, res) => {
//     console.log('About page');
//     res.send('About page');
// })

// app.listen(3000, () => {
//     console.log('Server running on port 3000')
// });

//Creating server using node js

// import http from 'http';

// const server = http.createServer((req, res) => {
//     // Home page
//     if (req.url === "/" && req.method === "GET") {
//         res.writeHead(200, {
//             "Content-Type": "text/plain",
//         });

//         res.end("Hello from Node.js server");
//     }

//     // About page
//     else if (req.url === "/about" && req.method === "GET") {
//         res.writeHead(200, {
//             "Content-Type": "text/plain",
//         });

//         res.end("About page");
//     }

//     // Page not found
//     else {
//         res.writeHead(404, {
//             "Content-Type": "text/plain",
//         });

//         res.end("Page not found");
//     }
// });

// server.listen(5000, () => {
//     console.log("Server running on http://localhost:3000");
// });

//Creating server using Express JS

import express from 'express';
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    console.log('Home Page');
    res.send('Home Page');

})
app.get('/about', (req, res) => {
    console.log('About Page');
    res.send('About Page');

})
app.get('/login', (req, res) => {
    console.log('LOGGEDIN');
    res.send('LOGGEDIN');

})
app.post('/create-user', (req, res) => {
    console.log(req.body);
    res.send({
        "message": `Hey ${req.body.name}  and  ${req.body.age}`
    });
})


app.listen(3000, () => {
    console.log('server tumi ready hoicho')
})