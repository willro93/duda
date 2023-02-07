//Este es el archivo del servidor


//const lista = require ('./main')  //así es como estoy intentando llamar a archivo del otro .js

const express = require('express');

const app = express();

app.get('/product', (req, res) => {
    res.send({})
})

app.get('/product/:pid', (req, res) => {
   const {pid} = req.params
   res.send({product: pid})
})

app.listen(8080, () => console.log('Servidor listo'))
