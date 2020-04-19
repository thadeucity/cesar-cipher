interface Request {
  text: string;
}

class CesarEncryptService {
  public execute({ text }: Request): string {
    const alphabet = ' abcdefghijklmnopqrstuvwxyz0123456789.,:;!?-()'.split(''); // possible characters
    const englishLetterFrequency = ' etaoinshrdlcumwfgypbvkjxqz0123456789.,:;!?-()'.split(
      '',
    ); // most frequent letters in english text

    const alphabetObject: Record<string, number> = {};

    // PART 1 - Create an object to hold how many times each encrypted letter appeared.

    for (let i = 0; i < alphabet.length; i++) {
      const char = alphabet[i];
      alphabetObject[char] = 0;
    }

    const textArray = text.split('');

    for (let i = 0; i < textArray.length; i++) {
      const char = textArray[i];
      alphabetObject[char]++;
    }

    // Part 2 - Create an array listing the most frequent encrypted letters.

    let mostFrequentChars: Array<string> = [alphabet[0]];

    for (let i = 1; i < alphabet.length; i++) {
      // i = 1 to start in the second item of the array;
      if (alphabetObject[alphabet[i]] > alphabetObject[mostFrequentChars[0]]) {
        mostFrequentChars = [alphabet[i]];
      } else if (
        alphabetObject[alphabet[i]] === alphabetObject[mostFrequentChars[0]]
      ) {
        mostFrequentChars.push(alphabet[i]);
      }
    }

    // Part 3 - Create an array of possible results and possible passwords;

    const totalTests = mostFrequentChars.length * 5; // To test for the 6 most common letters;

    const possibleResults: Array<string> = [];
    const possibleResultsPoints: Array<number> = [];

    // Part 3.1 - Calculate a possible password
    for (let i = 0, j = 0; i < totalTests; i++) {
      if (i % 5 === 0 && i > 0) j++; // change the frequent char
      const password =
        alphabet.indexOf(mostFrequentChars[j]) -
        alphabet.indexOf(englishLetterFrequency[i - j * i]);

      // Part 3.2 - Decrypt the text with one possible password
      const decryptedTextArray = textArray.map(char => {
        const charIndex = alphabet.indexOf(char);

        const newChar =
          charIndex - password < 0
            ? alphabet[charIndex - password + alphabet.length]
            : alphabet[charIndex - password];

        return newChar;
      });

      // Part 3.3 - Calculate how many points the decrypted text made (less is better)
      const decryptedTextPoints = decryptedTextArray.reduce(
        (accumulator, currentValue) => {
          return accumulator + englishLetterFrequency.indexOf(currentValue);
        },
        0,
      );

      possibleResults[i] = decryptedTextArray.join('');
      possibleResultsPoints[i] = decryptedTextPoints;
    }

    // Part 4 - Select the solution with the least amount of points as the best
    const bestResponseIndex = possibleResultsPoints.indexOf(
      Math.min(...possibleResultsPoints),
    );

    return possibleResults[bestResponseIndex];
  }
}

export default CesarEncryptService;
