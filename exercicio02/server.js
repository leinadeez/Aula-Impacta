const http = require('http');

const tratarRequisicoes = (_, res) => {
    res.writeHead(200, { "Content-Type": "text/html"});
    res.write("<h1>Nhaí vinhado</h1>");
    res.end();
}

const server = http.createServer(tratarRequisicoes);

server.listen(3000, () => console.log("Tá aberto na 3000, jovem"))