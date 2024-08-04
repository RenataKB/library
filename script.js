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


const mainSection = document.querySelector("main");

function createBookCard(book) {
  const bookCard = document.createElement("section");
  bookCard.setAttribute("class", "book-card");
  const bookInfoDiv = displayBookInfo(book);
  bookCard.appendChild(bookInfoDiv);
  const removeBookBtn = createRemoveButton(book);
  bookCard.appendChild(removeBookBtn);
  mainSection.appendChild(bookCard);
}

function displayBookInfo(book) {
  const bookInfoDiv = document.createElement("div");
  bookInfoDiv.setAttribute("class", "book-info");
  for (const key in book) {
    const bookInfo = document.createElement("p");
    bookInfo.setAttribute("class", key);
    bookInfo.textContent = book[key];
    if (key == "haveRead") {
      bookInfo.textContent = book.haveRead ? "Read" : "Not read";
      const readBookBtn = changeReadStatusButton(book);
      bookInfo.appendChild(readBookBtn);
    }
    bookInfoDiv.appendChild(bookInfo);
  }
  return bookInfoDiv;
}

function createRemoveButton(book) {
  const removeBookBtn = document.createElement("button");
  const bookId = myLibrary.indexOf(book);
  removeBookBtn.setAttribute("id", bookId);
  removeBookBtn.setAttribute("class", "remove-book");
  removeBookBtn.textContent = "Remove from library";
  removeBookBtn.addEventListener("click", () => removeBookFromLibrary(bookId));
  return removeBookBtn;
}

function changeReadStatusButton(book) {
  const readBookBtn = document.createElement("button");
  readBookBtn.setAttribute("class", "change-read-status");
  readBookBtn.textContent = book.haveRead ? "mark as not read" : "mark as read";
  readBookBtn.addEventListener("click", () => {
    book.haveRead = !book.haveRead;
    showLibrary();
  })
  return readBookBtn;
}

function showLibrary() {
  // since I'm not using a unique id for the books, clean before start everytime
  mainSection.replaceChildren();
  myLibrary.forEach(book => createBookCard(book));
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
  const bookTitle = document.getElementById("book-title").value;
  const bookAuthor = document.getElementById("book-author").value;
  const bookPages = document.getElementById("book-pages").value;
  const bookRead = document.getElementById("read").checked;

  newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);

  addBookToLibrary();
});

function removeBookFromLibrary(bookId) {
  myLibrary.splice(bookId, 1);
  showLibrary();
}

function addBookToLibrary() {
  if (newBook.title && newBook.author) {
    myLibrary.push(newBook);
    showLibrary();
  }
  newBook = null;
}
