// findAccountById Function

function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
};


// sortAccountsByLastName Function

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ? 1 : -1);
};


// getTotalNumberOfBorrows Function

function getTotalNumberOfBorrows(account, books) {
  let total = 0;
  for (let i = 0; i < books.length; i++) {
    const borrows = books[i].borrows;
    for (let j = 0; j < borrows.length; j++) {
      if (account.id === borrows[j].id) total++;
    };
  };
  return total;
};


// getBooksPossessedByAccount Function

function getBooksPossessedByAccount(account, books, authors) {
  const booksCheckedOut = [];
  for (let i = 0; i < books.length; i++) {
    let borrows = books[i].borrows;
    for (let j = 0; j < borrows.length; j++) {
      if (account.id === borrows[j].id && !borrows[j].returned) {
        const book = books[i];
        const authorDetails = authors.find((author) => books[i].authorId === author.id);
        book["author"] = authorDetails;
        booksCheckedOut.push(book);
      };
    };
  };
  return booksCheckedOut;
};


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
