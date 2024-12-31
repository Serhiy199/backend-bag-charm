import * as fs from 'node:fs/promises';
import path from 'node:path';
import day from 'dayjs';
import cors from 'cors';

import express from 'express';
import routes from './routes/index.js';

const app = express();
app.use(routes);

app.use(cors());

app.use(async (req, res, next) => {
    const { method, url } = req;
    const moment = day().format('DD-MM-YYYY_hh:mm:ss');
    await fs.appendFile(path.resolve('public', 'server.log'), `\n${method} ${url} ${moment}`);
    next();
});

app.get('/', (req, res) => {
    res.send('Done');
});

app.listen(8080, () => {
    console.log('Server started on port 8080');
});
