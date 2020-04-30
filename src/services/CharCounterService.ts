interface CounterObject {
  [key: string]: number;
}

export interface CharSet extends CounterObject {
  total: number;
  unkown: number;
  a: number;
  b: number;
  c: number;
  d: number;
  e: number;
  f: number;
  g: number;
  h: number;
  i: number;
  j: number;
  k: number;
  l: number;
  m: number;
  n: number;
  o: number;
  p: number;
  q: number;
  r: number;
  s: number;
  t: number;
  u: number;
  v: number;
  w: number;
  x: number;
  y: number;
  z: number;
  $: number;
  _: number;
  ƒ: number;
  ˆ: number;
  Š: number;
  Œ: number;
  Ž: number;
  š: number;
  œ: number;
  ž: number;
  Ÿ: number;
  ª: number;
  µ: number;
  º: number;
  Æ: number;
  æ: number;
  ç: number;
  Ð: number;
  ñ: number;
  Ø: number;
  Þ: number;
  ß: number;
  ð: number;
  ø: number;
  þ: number;
  '0': number;
  '1': number;
  '2': number;
  '3': number;
  '4': number;
  '5': number;
  '6': number;
  '7': number;
  '8': number;
  '9': number;
  ' ': number;
  '!': number;
  '"': number;
  '#': number;
  '%': number;
  '&': number;
  "'": number;
  '(': number;
  ')': number;
  '*': number;
  '+': number;
  ',': number;
  '-': number;
  '.': number;
  '/': number;
  ':': number;
  ';': number;
  '<': number;
  '=': number;
  '>': number;
  '?': number;
  '@': number;
  '[': number;
  ']': number;
  '^': number;
  '`': number;
  '{': number;
  '|': number;
  '}': number;
  '~': number;
  '€': number;
  '‚': number;
  '„': number;
  '…': number;
  '†': number;
  '‡': number;
  '‰': number;
  '‹': number;
  '‘': number;
  '’': number;
  '“': number;
  '”': number;
  '•': number;
  '–': number;
  '—': number;
  '˜': number;
  '™': number;
  '›': number;
  '¢': number;
  '£': number;
  '¤': number;
  '¥': number;
  '¦': number;
  '§': number;
  '¨': number;
  '©': number;
  '«': number;
  '¬': number;
  '®': number;
  '¯': number;
  '°': number;
  '±': number;
  '²': number;
  '³': number;
  '´': number;
  '¶': number;
  '·': number;
  '¸': number;
  '¹': number;
  '»': number;
  '¼': number;
  '½': number;
  '¾': number;
  '×': number;
  '÷': number;
  '¿': number;
}

class CharCounterService {
  public execute(text: string): CharSet {
    const alphabet = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ'.split(
      '',
    );

    const aCharGroup = ['a', 'à', 'á', 'â', 'ã', 'ä', 'å'];
    const eCharGroup = ['e', 'è', 'é', 'ê', 'ë'];
    const iCharGroup = ['i', 'ì', 'í', 'î', 'ï'];
    const oCharGroup = ['o', 'ò', 'ó', 'ô', 'õ', 'ö'];
    const uCharGroup = ['u', 'ù', 'ú', 'û', 'ü'];
    const yCharGroup = ['y', 'ý', 'ÿ'];

    const alphabetObject: CharSet = {
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

    const alphabetObjectKeys = Object.keys(alphabetObject);

    const cleanText = text.replace(/\r?\n|\r/g, ' ');

    const textArray = cleanText.toLocaleLowerCase().split('');

    for (let i = 0; i < textArray.length; i++) {
      const char = textArray[i];
      if (aCharGroup.indexOf(char) >= 0) {
        alphabetObject.a++;
      } else if (eCharGroup.indexOf(char) >= 0) {
        alphabetObject.e++;
      } else if (iCharGroup.indexOf(char) >= 0) {
        alphabetObject.i++;
      } else if (oCharGroup.indexOf(char) >= 0) {
        alphabetObject.o++;
      } else if (uCharGroup.indexOf(char) >= 0) {
        alphabetObject.u++;
      } else if (yCharGroup.indexOf(char) >= 0) {
        alphabetObject.y++;
      } else if (alphabetObjectKeys.indexOf(char) < 0) {
        alphabetObject.total--;
        alphabetObject.unkown++;
      } else {
        alphabetObject[char]++;
      }
      alphabetObject.total++;
    }

    return alphabetObject;
  }
}

export default CharCounterService;
