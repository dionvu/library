const library = [];

const acotar = new Book("A Court of Thorns and Roses", "Sarah J. Maas", 120, false);
const acotar1 = new Book("A Court of Mist and Fury", "Sarah J. Maas", 420, false);

// DOM elements
const bookList = document.getElementById("book-list");
const dialog = document.querySelector("dialog");
const form = document.querySelector('form');

function Book(title, author, pages, read) {
  this.title = title;
  this.pages = pages;
  this.author = author;
  this.read = read;
}

Book.prototype.addBookToLibrary = function() {
  library.push(this);
}

function displayBooks(library) {
  for (let i = 0; i < library.length; i++) {
    const book = document.createElement("div");
    book.classList.add('book');

    book.style.cssText = `
      height: 250px;
      width: 500px;
      border: black solid 1px;
      padding: 10px;
    `;

    const bookTitle = document.createElement("h2");
    bookTitle.textContent = library[i].title;
    book.appendChild(bookTitle);

    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = "By: " + library[i].author;
    book.appendChild(bookAuthor);

    const bookPages = document.createElement("p");
    bookPages.textContent = "Pages: " + library[i].pages;
    book.appendChild(bookPages);

    const bookRead = document.createElement("button");
    bookRead.textContent = "not read";
    bookRead.style.cssText = `
      margin: 10px;
      background: red;
      border-radius: 5px;
      padding: 3px;
    `;

    bookRead.addEventListener('click', () => {
      if (library[i].read === false) {
        library[i].read = true;
        bookRead.style.background = 'green';
        bookRead.textContent = 'read';
      }
      else {
        library[i].read = false;
        bookRead.style.background = 'red';
        bookRead.textContent = 'not read';
      }
    });
    book.appendChild(bookRead);

    const bookButton = document.createElement("button");
    bookButton.addEventListener('click', () => {

      const index = library.findIndex(book => book.title == bookTitle.textContent);
      library.splice(index, 1);
      book.remove();
    });

    bookButton.classList.add('delete-button');

    book.appendChild(bookButton);

    bookList.appendChild(book);
  }
}


document.getElementById("create-book").addEventListener('click', () => {
  dialog.showModal();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  var pages = document.getElementById('pages').value;
  var title = document.getElementById('title').value;
  var author = document.getElementById('author').value;

  console.log(pages);

  dialog.close();
  form.reset();

  const newBook = new Book(title, author, pages, false);

  newBook.addBookToLibrary();

  displayBooks(library.slice(library.length - 1, library.length));
});


acotar.addBookToLibrary();
acotar1.addBookToLibrary();

displayBooks(library);
