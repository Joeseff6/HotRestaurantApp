const http = require('http');

const PORT = 7000;

const handleRequest1 = (request, response) => {
    response.end(`Server is up and running`);
}

const server = http.createServer(handleRequest1);

server.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}.`))