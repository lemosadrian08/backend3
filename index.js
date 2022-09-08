const express = require('express')
const contenedor1 = require ('./contenedor.js')

contenedor1.getAll().then(resolve=>{
    console.log(resolve);
})

const PORT = process.env.PORT || 8080

const app = express()

const conectedServer = app.listen(PORT, ()=>{
    console.log(`Server is up and running on port ${PORT}`);
})

conectedServer.on('error', (error)=>{
    console.log(error.message);
})

app.get('/', (req,res)=>{
    res.send('Home')
})

app.get('/productos', (req,res)=>{
    contenedor1.getAll().then((products) => res.send(products)) 
})

app.get('/productosRandom', (req,res)=>{
    contenedor1.getById(Math.floor(Math.random()*(3-1+1))+1).then((products) => res.send(products)) 
})

app.get('/login', (req,res)=>{
    res.send('Login')
})

app.get('*', (req,res)=>{
    res.status(404).send('La pagina no existe')
})