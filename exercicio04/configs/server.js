const port = 3200;

const express = require('express');
const server = express();

server.use(express.urlencoded({extended : true}));
server.use(express.json());

server.listen(port, () => console.log(`Servidor subiu na porta ${port}`))

module.exports = server;