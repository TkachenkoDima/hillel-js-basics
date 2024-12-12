const BaseController = require('./BaseController');

class BooksController extends BaseController {
	async getBooks() {
		return this.get('/BookStore/v1/Books');
	}

	async addBook(userId, isbn, token) {
		const body = {
			userId,
			collectionOfIsbns: [{ isbn }],
		};
		return this.post('/BookStore/v1/Books', body, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	}

	async deleteBook(userId, isbn, token) {
		return this.delete('/BookStore/v1/Book', {
			headers: {
				Authorization: `Bearer ${token}`,
			},
			data: {
				userId,
				isbn,
			},
		});
	}

	async getUserBooks(userId, token) {
		return this.get(`/Account/v1/User/${userId}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	}

	async replaceBookISBN(userId, oldISBN, newISBN, token) {
		return this.put(
			`/BookStore/v1/Books/${oldISBN}`, { 
        userId, isbn: newISBN }, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
		);
	}
}

module.exports = BooksController;
