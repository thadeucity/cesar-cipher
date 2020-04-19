import { Request, Response } from 'express';

import CesarEncryptService from '../services/cesarEncryptService';

const encryptController = {
  post(req: Request, res: Response) {
    const { text, password, encryptionType } = req.body;

    const CesarEncrypt = new CesarEncryptService();

    const encryptedText = CesarEncrypt.execute({ text, password });

    res.json({ encryptedText });
  },
};

export default encryptController;
