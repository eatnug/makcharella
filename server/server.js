import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config({ path: '../.env' });

const server = express();
const port = process.env.SERVER_PORT || null;

server.use(
    cors({
        origin: `${process.env.URL}:${process.env.CLIENT_PORT}`,
    }),
);
server.get('/', (req, res) => {
    res.json({ message: '/' });
});

server.get('/json', (req, res) => {
    res.json({ message: 'Hello world' });
});

server.listen(port, () => {
    console.log(port ? `Server listening at ${port}` : `some error with dotenv`);
});
