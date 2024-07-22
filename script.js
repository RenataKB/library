const myLibrary = [
  new Book("The Hobbit", "J.R.R. Tolkien", 310, true),
  new Book("The Silmarillion", "J.R.R. Tolkien", 468, false),
  new Book("Harry Potter and the Goblet of Fire", "J.K. Rowling", 636, true),
  new Book("A Game of Thrones", "George R.R. Martin", 694, true)
];

function Book(title, author, pages, haveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
}


const mainSection = document.querySelector('main');

function showLibrary() {
  // since I'm not using a unique id for the books, clean before start everytime
  mainSection.replaceChildren();

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

const bookDialog = document.getElementById("book-info");

const newBookButton = document.getElementById("new-book");
newBookButton.addEventListener("click", () => bookDialog.showModal());

const cancelButton = document.getElementById("cancel");
cancelButton.addEventListener("click", () => bookDialog.close());

let newBook;

const addBookButton = document.getElementById("add-book");
addBookButton.addEventListener("click", () => {
  const bookTitle = document.getElementById('book-title').value;
  const bookAuthor = document.getElementById('book-author').value;
  const bookPages = document.getElementById('book-pages').value;
  const bookRead = document.getElementById('read').checked;

  newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);

  addBookToLibrary();
});

function addBookToLibrary() {
  if (newBook.title && newBook.author) {
    myLibrary.push(newBook);
    showLibrary();
  }
  newBook = null;
}
