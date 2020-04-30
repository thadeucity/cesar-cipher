import { Request, Response } from 'express';
import fs from 'fs';

import CharCounterService, { CharSet } from '../services/CharCounterService';
import FrequencySortService from '../services/FrequencySortService';

const charStatisticsFile = 'src/memory/EnglishStatistics.txt';

const teachController = {
  countChar(req: Request, res: Response): Record<string, any> {
    const charCounter = new CharCounterService();
    const charSorter = new FrequencySortService();

    const importedTextFile = req.file.path;

    const content = fs.readFileSync(importedTextFile, 'utf-8');

    const countResults = charCounter.execute(content);

    const oldCounts: CharSet = JSON.parse(
      fs.readFileSync(charStatisticsFile, 'utf-8'),
    );

    const newCounts = {} as CharSet;

    Object.keys(oldCounts).map(
      (key): number => (newCounts[key] = countResults[key] + oldCounts[key]),
    );

    const sortedChars = charSorter.execute(newCounts);

    fs.writeFileSync(charStatisticsFile, JSON.stringify(newCounts), 'utf-8');

    return res.json({ sortedChars, newCounts });
  },

  resetCountMemory(req: Request, res: Response) {
    const cleanCharSet: CharSet = {
      total: 0,
      unkown: 0,
      a: 0,
      b: 0,
      c: 0,
      d: 0,
      e: 0,
      f: 0,
      g: 0,
      h: 0,
      i: 0,
      j: 0,
      k: 0,
      l: 0,
      m: 0,
      n: 0,
      o: 0,
      p: 0,
      q: 0,
      r: 0,
      s: 0,
      t: 0,
      u: 0,
      v: 0,
      w: 0,
      x: 0,
      y: 0,
      z: 0,
      $: 0,
      _: 0,
      ƒ: 0,
      ˆ: 0,
      Š: 0,
      Œ: 0,
      Ž: 0,
      š: 0,
      œ: 0,
      ž: 0,
      Ÿ: 0,
      ª: 0,
      µ: 0,
      º: 0,
      Æ: 0,
      æ: 0,
      ç: 0,
      Ð: 0,
      ñ: 0,
      Ø: 0,
      Þ: 0,
      ß: 0,
      ð: 0,
      ø: 0,
      þ: 0,
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
      '9': 0,
      ' ': 0,
      '!': 0,
      '"': 0,
      '#': 0,
      '%': 0,
      '&': 0,
      "'": 0,
      '(': 0,
      ')': 0,
      '*': 0,
      '+': 0,
      ',': 0,
      '-': 0,
      '.': 0,
      '/': 0,
      ':': 0,
      ';': 0,
      '<': 0,
      '=': 0,
      '>': 0,
      '?': 0,
      '@': 0,
      '[': 0,
      ']': 0,
      '^': 0,
      '`': 0,
      '{': 0,
      '|': 0,
      '}': 0,
      '~': 0,
      '€': 0,
      '‚': 0,
      '„': 0,
      '…': 0,
      '†': 0,
      '‡': 0,
      '‰': 0,
      '‹': 0,
      '‘': 0,
      '’': 0,
      '“': 0,
      '”': 0,
      '•': 0,
      '–': 0,
      '—': 0,
      '˜': 0,
      '™': 0,
      '›': 0,
      '¢': 0,
      '£': 0,
      '¤': 0,
      '¥': 0,
      '¦': 0,
      '§': 0,
      '¨': 0,
      '©': 0,
      '«': 0,
      '¬': 0,
      '®': 0,
      '¯': 0,
      '°': 0,
      '±': 0,
      '²': 0,
      '³': 0,
      '´': 0,
      '¶': 0,
      '·': 0,
      '¸': 0,
      '¹': 0,
      '»': 0,
      '¼': 0,
      '½': 0,
      '¾': 0,
      '×': 0,
      '÷': 0,
      '¿': 0,
    };

    fs.writeFileSync(charStatisticsFile, JSON.stringify(cleanCharSet), 'utf-8');

    return res.json({ cleaned: 'true' });
  },
};

export default teachController;
