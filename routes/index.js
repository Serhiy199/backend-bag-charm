import express from 'express';
import catalogRouter from './catalogRouter.js';
import handBagsRouter from './handBagsRouter.js';

const routes = express.Router();

routes.use('/catalog', catalogRouter);
routes.use('/handBag', handBagsRouter);

export default routes;
