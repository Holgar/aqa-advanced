export default class Book {
  constructor(title, author, publishYear) {
    this._title = title;
    this._author = author;
    this._publishYear = publishYear;
  }

  get title() {
    return this._title;
  }

  set title(newTitle) {
    if (typeof newTitle !== 'string') {
      throw new Error('Title should be a string');
    }
    this._title = newTitle;
  }

  get author() {
    return this._author;
  }

  set author(newAuthor) {
    if (typeof newAuthor !== 'string') {
      throw new Error('Author should be a string');
    }
    this._author = newAuthor;
  }

  get publishYear() {
    return this._publishYear;
  }

  set publishYear(newPublishYear) {
    if (typeof newPublishYear !== 'number' && newPublishYear < 0) {
      throw new Error('The year of publication must be a number greater than 0');
    }
    this._publishYear = newPublishYear;
  }

  printInfo() {
    console.log(`${this._author} wrote the book ${this._title}, which was published in the year ${this.publishYear}.`);
  }

  static findOldestBook(books) {
    if (!Array.isArray(books) || books.length === 0) {
      return null;
    }
    const sortedBooks = [...books].sort((a, b) => a.publishYear - b.publishYear);
    return sortedBooks[0];
  }
}
