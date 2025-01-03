import express from 'express';
import catalogRouter from './api/catalogRouter.js';
import handBagsRouter from './api/handBagsRouter.js';

const routes = express.Router();

routes.use('/catalog', catalogRouter);
routes.use('/handBag', handBagsRouter);

export default routes;
