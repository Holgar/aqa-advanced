import Book from './Book.js';
import Ebook from './EBook.js';

const books = [];

const book1 = new Book('The Lord of the Rings', 'J. R. R. Tolkien', 1954);
const book2 = new Book('Animal Farm', 'George Orwell', 1945);
const eBook1 = new Ebook('Der Steppenwolf', 'Hermann Hesse', 1927, 'PDF');
const eBook2 = new Ebook('Atlas Shrugged', 'Ayn Rand', 1957, 'FB2');
const convertedEbook = Ebook.createEbookFromBook(book1, 'EPUB');

books.push(book1, book2, eBook1, eBook2, convertedEbook);
