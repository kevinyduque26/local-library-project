// findAuthorById Function

function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
};


// findBookById Function

function findBookById(books, id) {
  return books.find((book) => book.id === id);
};


// partitionBooksByBorrowedStatus Function

function partitionBooksByBorrowedStatus(books) {
  const booksCheckedOut = [];
  const booksReturned = [];
  for (let i = 0; i < books.length; i++) {
    books[i].borrows[0].returned === false ? booksCheckedOut.push(books[i]) : booksReturned.push(books[i]);
  };
  return [ booksCheckedOut, booksReturned ];
};


// getBorrowersForBook Function

function getBorrowersForBook(book, accounts) {
  const result = [];
  const borrows = book.borrows
  for (let i = 0; i < borrows.length; i++) {
    const account = accounts.find((account) => borrows[i].id === account.id);
    account["returned"] = borrows[i].returned;
    if (result.length < 10) result.push(account);
  };
  return result;
};


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
