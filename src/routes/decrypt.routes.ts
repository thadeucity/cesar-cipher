import { Router } from 'express';

import DecryptController from '../controllers/DecryptController';

const decryptRouter = Router();

decryptRouter.post('/', DecryptController.post);

export default decryptRouter;
