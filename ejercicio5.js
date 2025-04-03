const express = require('express');
const calculos = require('./calculos'); 
const app = express();
const port = 3000;


app.set('view engine', 'ejs');

const operaciones = [
    { operacion: "Suma (5 + 3)", resultado: calculos.suma(5, 3) },
    { operacion: "Resta (8 - 6)", resultado: calculos.resta(8, 6) },
    { operacion: "Multiplicación (3 * 11)", resultado: calculos.multiplicacion(3, 11) },
    { operacion: "División (30 / 5)", resultado: calculos.division(30, 5) },
    { operacion: "División (10 / 0)", resultado: calculos.division(10, 0) } 
];

app.get('/', (_, res) => {
    res.render('index', { operaciones });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
