const express =require('express');

const port = 3000;

const app = express();

app.get('/', (req,res) => {res.send("Hello Browser")});

app.get('/ryan', (req,res) => {res.send("Hello ryan")}); 
app.get('/ian', (req,res) => {res.send("Hello Ian")}); 
app.get('/mosiah', (req,res) => {res.send("Hello Mosiah")});
app.get('/david', (req,res) => {res.send("Hello David")});

app.listen(port, ()=>console.log("Listening"));