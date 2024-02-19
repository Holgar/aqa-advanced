import { Book } from "./Book.js";

export class Ebook extends Book {
    constructor(title,author,publishYear,fileFormat){
        super(title,author,publishYear);
        this._fileFormat = fileFormat;
    }

    get fileFormat() {
        return this._fileFormat;
      }
    
    set fileFormat(newFormat) {
        if (typeof newFormat !== 'string') {
            throw new Error('File format must be a string');
          
        } 
        this._fileFormat = newFormat;
    }

    printInfo(){
        super.printInfo();
        console.log(`File format: ${this._fileFormat}`);
    }

    static createEbookFromBook(book, fileFormat) {
        return new Ebook(book.title, book.author, book.publishYear, fileFormat);
    }
}