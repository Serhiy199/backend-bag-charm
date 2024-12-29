import * as fs from 'node:fs';
import path from 'node:path';

import express, { response } from 'express';

const app = express();

app.get('/', (req, res) => {
    response.send('Done');
});

app.get('/catalog', (req, res) => {
    res.send('Get Catalog Page');
});

app.listen(8080, () => {
    console.log('Server started on port 8080');
});
