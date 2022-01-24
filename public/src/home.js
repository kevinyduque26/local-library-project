// getTotalBooksCount Function

function getTotalBooksCount(books) {
  return books.length;
};


// getTotalAccountsCount Function

function getTotalAccountsCount(accounts) {
  return accounts.length;
};


// getBooksBorrowedCount Function

function getBooksBorrowedCount(books) {
  let borrowedCount = [];
  for (let i = 0; i < books.length; i++) {
    if (books[i].borrows[0].returned === false) borrowedCount.push(1);
  };
  return borrowedCount.reduce((total, count) => total + count);
};


// getMostCommonGenres Function

function getMostCommonGenres(books) {
  
  const listOfGenres = [];

  for (let i = 0; i < books.length; i++) {
    if (!listOfGenres.includes(books[i].genre)) listOfGenres.push(books[i].genre);
  };

  const result = [];

  for (let i = 0; i < listOfGenres.length; i++) {
    const count = books.filter((book) => book.genre === listOfGenres[i])
    const newCount = count.length;
    const genre = listOfGenres[i]
    const object = {};
    object["name"] = genre;
    object["count"] = newCount;
    result.push(object);
  };

  const sortedResult = result.sort((genreA, genreB) => genreB.count - genreA.count);
  
  return [ sortedResult[0], sortedResult[1], sortedResult[2], sortedResult[3], sortedResult[4] ]

};


// getMostPopularBooks Function

function getMostPopularBooks(books) {
  
  const listOfBooks = [];

  for (let i = 0; i < books.length; i++) {
    if (!listOfBooks.includes(books[i].title)) listOfBooks.push(books[i].title);
  };

  const result = [];

  for (let i = 0; i < listOfBooks.length; i++) {
    const book = books.filter((book) => book.title === listOfBooks[i]);
    const count = book[0].borrows;
    const newCount = count.length;
    const title = listOfBooks[i];
    const object = {};
    object["name"] = title;
    object["count"] = newCount;
    result.push(object);
  };

  const sortedResult = result.sort((bookA, bookB) => bookB.count - bookA.count);
  
  return [ sortedResult[0], sortedResult[1], sortedResult[2], sortedResult[3], sortedResult[4] ]

};

// getMostPopularAuthors Function

function getMostPopularAuthors(books, authors) {

  const listOfAuthorsById = [];

  for (let i = 0; i < authors.length; i++) {
    if (!listOfAuthorsById.includes(authors[i].id)) listOfAuthorsById.push(authors[i].id);
  };

  const result = [];

  for (let i = 0; i < listOfAuthorsById.length; i++) {
    const booksByAuthor = books.filter((book) => book.authorId === listOfAuthorsById[i]);
    const booksBorrowed = booksByAuthor.map((book) => book.borrows);
    let booksBorrowedCount = [];

    for (let i = 0; i < booksBorrowed.length; i++) {
      booksBorrowedCount = [...booksBorrowedCount, ...booksBorrowed[i]];
    };

    const author = authors.find((author) => author.id === listOfAuthorsById[i]);
    const { name: { first, last} } = author;
    const authorName = first + " " + last;
    const name = authorName;
    const count = booksBorrowedCount.length;
    const object = { name, count};
    result.push(object);

  };

  const sortedResult = result.sort((bookA, bookB) => bookB.count - bookA.count);
  
  return [ sortedResult[0], sortedResult[1], sortedResult[2], sortedResult[3], sortedResult[4] ]

};

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
