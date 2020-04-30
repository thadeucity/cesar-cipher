import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';

import TeachController from '../controllers/TeachController';

const upload = multer(uploadConfig);

const teachRouter = Router();

teachRouter.post('/', upload.single('file'), TeachController.countChar);
teachRouter.post('/clear', TeachController.resetCountMemory);

export default teachRouter;
