const http = require('http');
const app = require('./app');
const port = process.env.PORT

const Server = http.createServer(app);

Server.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
})