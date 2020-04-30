import { CharSet } from './CharCounterService';

class FrequencySorteService {
  public execute(charList: CharSet): string[] {
    const charListWithoutProps = charList;
    delete charListWithoutProps.total;
    delete charListWithoutProps.unkown;
    const sortedChars = Object.keys(charListWithoutProps).sort(
      (a, b) => charListWithoutProps[a] - charListWithoutProps[b],
    );

    return sortedChars.reverse();
  }
}

export default FrequencySorteService;
