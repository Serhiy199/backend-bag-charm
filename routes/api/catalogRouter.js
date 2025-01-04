import * as fs from 'node:fs/promises';
import path from 'node:path';
import express from 'express';
import crypto from 'node:crypto';

const catalogRouter = express.Router();
const bagsPath = path.resolve('db', 'handbags.json');

const jsonParser = express.json();

import validateBody from '../../helpers/validateBody.js';
import { createContactSchema } from '../../schemas/contactsSchemas.js';

catalogRouter.get('/', async (req, res) => {
    const data = await fs.readFile(bagsPath, { encoding: 'utf-8' });
    const arrBags = JSON.parse(data);

    res.send(arrBags);
});

catalogRouter.post('/', jsonParser, validateBody(createContactSchema), async (req, res) => {
    // const { catalogId } = req.params;
    const { name, email, phone } = req.body;

    res.status(201).json({ id: crypto.randomUUID(), name, email, phone });
});

// catalogRouter.put('/', async (req, res) => {
//     res.send('PUT catalog');
// });

// catalogRouter.delete('/', async (req, res) => {
//     res.send('DELETE catalog');
// });

// catalogRouter.patch('/', async (req, res) => {
//     res.send('PATCH catalog');
// });

export default catalogRouter;

// import express from 'express';
// import {
//     getAllContacts,
//     getOneContact,
//     deleteContact,
//     createContact,
//     updateContact,
// } from '../controllers/contactsControllers.js';

// const contactsRouter = express.Router();

// contactsRouter.get('/', getAllContacts);

// contactsRouter.get('/:id', getOneContact);

// contactsRouter.delete('/:id', deleteContact);

// contactsRouter.post('/', createContact);

// contactsRouter.put('/:id', updateContact);

// export default contactsRouter;
