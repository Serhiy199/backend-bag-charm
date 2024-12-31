import * as fs from 'node:fs/promises';
import path from 'node:path';
import express from 'express';

const catalogRouter = express.Router();
const bagsPath = path.resolve('db', 'handbags.json');

catalogRouter.get('/', async (req, res) => {
    const data = await fs.readFile(bagsPath, { encoding: 'utf-8' });
    const arrBags = JSON.parse(data);

    res.send(arrBags);
});

catalogRouter.post('/', async (req, res) => {
    res.send('POST catalog');
});

catalogRouter.put('/', async (req, res) => {
    res.send('PUT catalog');
});

catalogRouter.delete('/', async (req, res) => {
    res.send('DELETE catalog');
});

catalogRouter.patch('/', async (req, res) => {
    res.send('PATCH catalog');
});

export default catalogRouter;
