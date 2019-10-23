import express from 'express';
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

const server = express();
const port = process.env.SERVER_PORT;

server.get('/', (req, res) => {
    res.json({ message: `it's api server` });
});

server.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello world' });
});
server.get('/api/adios', (req, res) => {
    res.json({ message: 'Adios world' });
});

server.listen(port, () => {
    console.log(port ? `Server listening at ${port}` : `some error with dotenv`);
});
