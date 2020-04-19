import { Router } from 'express';

import EncryptController from '../controllers/EncryptController';

const encryptRouter = Router();

encryptRouter.post('/', EncryptController.post);

export default encryptRouter;
