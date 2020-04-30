import { Request, Response } from 'express';
import fs from 'fs';

import CharCounterService, { CharSet } from '../services/CharCounterService';
import FrequencySortService from '../services/FrequencySortService';

import CesarDecryptService from '../services/CesarDecryptService';

const charStatisticsFile = 'src/memory/EnglishStatistics.txt';

const decryptController = {
  post(req: Request, res: Response) {
    const { text } = req.body;

    const CesarDecrypt = new CesarDecryptService();
    const charSorter = new FrequencySortService();

    const oldCounts: CharSet = JSON.parse(
      fs.readFileSync(charStatisticsFile, 'utf-8'),
    );

    const charSortedByFrequency = charSorter.execute(oldCounts);

    const decryptedText = CesarDecrypt.execute({
      text,
      frequencySorted: charSortedByFrequency,
    });

    res.json({ decryptedText });
  },
};

export default decryptController;
