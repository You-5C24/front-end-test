import * as fs from 'fs';
import { readAndProcessFile, FileReader } from './readAndProcessFile';

class TextFileReader implements FileReader {
  read(filePath: string) {
    return fs.readFileSync(filePath, { encoding: 'utf-8' });
  }
}

const result = readAndProcessFile('example.txt', new TextFileReader());

console.log(result);
