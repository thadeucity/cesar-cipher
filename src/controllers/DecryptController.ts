import { Request, Response } from 'express';

import CesarDecryptService from '../services/CesarDecryptService';

const decryptController = {
  post(req: Request, res: Response) {
    const { text } = req.body;

    const CesarDecrypt = new CesarDecryptService();

    const decryptedText = CesarDecrypt.execute({ text });

    res.json({ decryptedText });
  },
};

export default decryptController;
