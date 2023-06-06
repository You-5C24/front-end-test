// import * as fs from 'fs';

// export class readAndProcessFile {
//   run(filePath: string) {
//     const content = fs.readFileSync(filePath, { encoding: 'utf-8' });

//     return content + ' unit test';
//   }
// }

export interface FileReader {
  read(filePath: string): string;
}

// export class ReadAndProcessFile {
//   private _fileReader: FileReader;
//   constructor(fileReader: FileReader) {
//     this._fileReader = fileReader;
//   }
//   run(filePath: string) {
//     const content = this._fileReader.read(filePath);

//     return content + ' unit test';
//   }
// }

// export class ReadAndProcessFile {
//   private _fileReader: any;
//   run(filePath: string) {
//     const content = this._fileReader.read(filePath);

//     return content + ' unit test';
//   }

//   set fileReader(fileReader: FileReader) {
//     this._fileReader = fileReader;
//   }
// }

export class ReadAndProcessFile {
  private _fileReader: any;
  run(filePath: string) {
    const content = this._fileReader.read(filePath);

    return content + ' unit test';
  }

  setFileReader(fileReader: FileReader) {
    this._fileReader = fileReader;
  }
}
