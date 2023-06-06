import { describe, it, expect } from 'vitest';
import { readAndProcessFile } from './readAndProcessFile';

describe('di function', () => {
  it('read and process  file', () => {
    class StubFileReader {
      read(filePath: string) {
        return '5c24';
      }
    }
    const result = readAndProcessFile('./test', new StubFileReader());

    expect(result).toBe('5c24 test unit');
  });
});
