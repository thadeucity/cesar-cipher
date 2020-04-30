import { Router } from 'express';
import encryptRouter from './encrypt.routes';
import decryptRouter from './decrypt.routes';
import teachRouter from './teach.routes';

const routes = Router();

routes.use('/encrypt', encryptRouter);
routes.use('/decrypt', decryptRouter);
routes.use('/teach', teachRouter);

export default routes;
