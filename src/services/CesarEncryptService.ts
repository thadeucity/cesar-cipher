import { alphabet } from '../libs/consts';

interface Request {
  text: string;
  password: number;
}

class CesarEncryptService {
  public execute({ text, password }: Request): string {
    const textArray = text.split('');

    const encryptedTextArray = textArray.map(char => {
      const charIndex = alphabet.indexOf(char);

      const newChar =
        charIndex + password > alphabet.length - 1
          ? alphabet[charIndex + password - alphabet.length]
          : alphabet[charIndex + password];

      return newChar;
    });

    return encryptedTextArray.join('');
  }
}

export default CesarEncryptService;
