import * as fs from 'node:fs/promises';
import path from 'node:path';
import express from 'express';

const handBagsRouter = express.Router();
const bagsPath = path.resolve('db', 'handbags.json');

handBagsRouter.get('/', async (req, res) => {
    const data = await fs.readFile(bagsPath, { encoding: 'utf-8' });
    const arrBags = JSON.parse(data);

    res.send(arrBags);
});

// handBagsRouter.post('/', async (req, res) => {
//     res.send('POST handBags');
// });

// handBagsRouter.put('/', async (req, res) => {
//     res.send('PUT handBags');
// });

// handBagsRouter.delete('/', async (req, res) => {
//     res.send('DELETE handBags');
// });

// handBagsRouter.patch('/', async (req, res) => {
//     res.send('PATCH handBags');
// });

export default handBagsRouter;
