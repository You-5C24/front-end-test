import { describe, it, expect } from 'vitest';
import { ReadAndProcessFile, FileReader } from './readAndProcessFile';

describe('di-class', () => {
  // it('构造函数', () => {
  //   class StubFileReader implements FileReader {
  //     read(filePath: string): string {
  //       return '5c24';
  //     }
  //   }

  //   const readAndProcessFile = new ReadAndProcessFile(new StubFileReader());
  //   expect(readAndProcessFile.run('./test')).toBe('5c24 test unit');
  // });
  // it('属性', () => {
  //   class StubFileReader implements FileReader {
  //     read(filePath: string): string {
  //       return '5c24';
  //     }
  //   }

  //   const readAndProcessFile = new ReadAndProcessFile();
  //   readAndProcessFile.fileReader = new StubFileReader();

  //   expect(readAndProcessFile.run('./test')).toBe('5c24 test unit');
  // });
  it('方法', () => {
    class StubFileReader implements FileReader {
      read(filePath: string): string {
        return '5c24';
      }
    }

    const readAndProcessFile = new ReadAndProcessFile();
    readAndProcessFile.setFileReader(new StubFileReader());

    expect(readAndProcessFile.run('./test')).toBe('5c24 test unit');
  });
});
