const myLibrary = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 310,
    haveRead: true
  },
  {
    title: "The Silmarillion",
    author: "J.R.R. Tolkien",
    pages: 468,
    haveRead: false
  },
  {
    title: "Harry Potter and the Goblet of Fire",
    author: "J.K. Rowling",
    pages: 636,
    haveRead: true
  }
  ,
  {
    title: "A Game of Thrones",
    author: "George R.R. Martin",
    pages: 694,
    haveRead: true
  }

];

function Book(title, author, pages, haveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
}


const mainSection = document.querySelector('main');

function showLibrary() {
  myLibrary.forEach(book => {
    const bookCard = document.createElement('section');
    for (const key in book) {
      if (Object.hasOwnProperty.call(book, key)) {
        const bookInfo = document.createElement('p');
        bookInfo.textContent = book[key];
        bookCard.appendChild(bookInfo);   
      }
    }
    mainSection.appendChild(bookCard);
  });
}

showLibrary();
