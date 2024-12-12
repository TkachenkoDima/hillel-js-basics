const { expect } = require('@playwright/test');
const BooksPage = require('../pages/BooksPage');
const UserPage = require('../pages/UserPage');
const { validUser, allBooks } = require('../utils/testData');

describe('Bookstore API Extended Tests', () => {
  const booksPage = new BooksPage();
  const userPage = new UserPage();
  let token;
  let userId;

  beforeAll(async () => {
    const response = await userPage.login(validUser.username, validUser.password);
    token = response.token;
    userId = response.userId;
    console.log('Token:', token);
    console.log('User ID:', userId);
  });

  test('Delete all user books if exists', async () => {
    const userBooks = await booksPage.getUserBooks(userId, token);
    expect(userBooks).toBeInstanceOf(Array);

    for (const book of userBooks) {
      const response = await booksPage.deleteBookFromUser(userId, book.isbn, token);
      expect(response).toBe(204);
    }

    const updatedBooks = await booksPage.getUserBooks(userId, token);
    expect(updatedBooks).toBeInstanceOf(Array);
    expect(updatedBooks.length).toBe(0);
  });

  test('Add book to user', async () => {
    const isbn = allBooks[0].isbn; 
    const response = await booksPage.addBookToUser(userId, isbn, token);

    expect(response.books).toBeInstanceOf(Array);
    const addedBook = response.books.find((book) => book.isbn === isbn);
    expect(addedBook).toBeDefined();
    expect(addedBook.isbn).toBe(isbn);
    expect(response.books.length).toBeGreaterThan(0);
  });

  test('Add another book to user', async () => {
    const isbn = allBooks[1].isbn; 
    const response = await booksPage.addBookToUser(userId, isbn, token);

    expect(response.books).toBeInstanceOf(Array);
    const addedBook = response.books.find((book) => book.isbn === isbn);
    expect(addedBook).toBeDefined();
    expect(addedBook.isbn).toBe(isbn);
    expect(response.books.length).toBeGreaterThan(0);
  });

  test('Get user books', async () => {
    const userBooks = await booksPage.getUserBooks(userId, token);
    expect(userBooks).toBeInstanceOf(Array);
  });

  test('Replace book by ISBN', async () => {
    const oldISBN = allBooks[0].isbn;
    const newISBN = allBooks[2].isbn;
  
    const replaceResponse = await booksPage.replaceBookISBN(userId, oldISBN, newISBN, token);
  
    const userBooks = await booksPage.getUserBooks(userId, token);
  
    const replacedBook = userBooks.find((book) => book.isbn === newISBN);
    expect(replacedBook).toBeDefined();
    expect(replacedBook.isbn).toBe(newISBN);
  
    const oldBook = userBooks.find((book) => book.isbn === oldISBN);
    expect(oldBook).toBeUndefined();
  });

  test('Delete book and verify', async () => {
    const isbnToDelete = allBooks[1].isbn;

    const deleteResponse = await booksPage.deleteBookFromUser(userId, isbnToDelete, token);
    expect(deleteResponse).toBe(204);

    const userBooks = await booksPage.getUserBooks(userId, token);
    const deletedBook = userBooks.find((book) => book.isbn === isbnToDelete);
    expect(deletedBook).toBeUndefined();
  });
});  
