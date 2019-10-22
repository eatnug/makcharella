import express from 'express';
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

const server = express();
const port = process.env.PORT || 3000;

server.get('/', (req, res) => {
    res.json({ message: '/' });
});

server.get('/json', (req, res) => {
    res.json({ message: 'Hello world' });
});

server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});
