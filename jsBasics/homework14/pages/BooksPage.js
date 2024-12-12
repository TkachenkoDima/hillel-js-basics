const BooksController = require('../controllers/BooksController');

class BooksPage {
  constructor() {
    this.booksController = new BooksController();
  }

  async getAllBooks() {
    const response = await this.booksController.getBooks();
    return response.data.books;
  }

  async addBookToUser(userId, isbn, token) {
    const response = await this.booksController.addBook(userId, isbn, token);
    return response.data;
  }

  async deleteBookFromUser(userId, isbn, token) {
    const response = await this.booksController.deleteBook(userId, isbn, token);
    return response.status;
  }

  async getUserBooks(userId, token) {
    const response = await this.booksController.getUserBooks(userId, token);
    return response.data.books || [];
  }

  async replaceBookISBN(userId, oldISBN, newISBN, token) {
    const response = await this.booksController.replaceBookISBN(userId, oldISBN, newISBN, token);
    return response.data;
  }
}  

module.exports = BooksPage;
