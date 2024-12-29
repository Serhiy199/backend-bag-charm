import * as fs from 'node:fs/promises';
import path from 'node:path';
import day from 'dayjs';

import express from 'express';

const app = express();

const bagsPath = path.resolve('db', 'bags.json');

app.use(async (req, res, next) => {
    const { method, url } = req;
    const moment = day().format('DD-MM-YYYY_hh:mm:ss');
    await fs.appendFile(path.resolve('public', 'server.log'), `\n${method} ${url} ${moment}`);
    next();
});

app.get('/', (req, res) => {
    res.send('Done');
});

app.get('/catalog', async (req, res) => {
    const data = await fs.readFile(bagsPath, { encoding: 'utf-8' });
    const arrBags = JSON.parse(data);

    res.send(arrBags);
});

app.listen(8080, () => {
    console.log('Server started on port 8080');
});
