import { Router } from 'express';
import encryptRouter from './encrypt.routes';
import decryptRouter from './decrypt.routes';

const routes = Router();

routes.use('/encrypt', encryptRouter);
routes.use('/decrypt', decryptRouter);

export default routes;
