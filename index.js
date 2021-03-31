var express = require('express');
var app = express();

app.get('/', c_inicio);
app.get('/clientes', c_clientes);
app.get('/productos', c_productos);

function c_inicio(req, res) {
    res.send('<h1>PÁGINA DE INICIO</h1>');
}

function c_clientes(req, res) {
    res.send('<h1>PÁGINA DE PRODUCTOS</h1>');
}

function c_productos(req, res) {
    res.send('<h1>PÁGINA DE PRODUCTOS</h1>');
}

function c_server(req, res) {
    var host = server.address().address;
    var port = server.address().port;
    console.log(host + ' : '+port);
}

var server = app.listen(9000,c_server);
