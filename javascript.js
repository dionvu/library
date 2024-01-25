const library = [];
const entryWidth = '500px';
const entryHeight = '250px';

const acotar = new Book("A Court of Thorns and Roses", "Sarah J. Maas", 120, false);
const acotar1 = new Book("A Court of Mist and Fury", "Sarah J. Maas", 420, false);

// DOM elements
const bookList = document.getElementById("book-list");
const header = document.getElementById("header");

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
    const box = document.createElement("div");

    box.style.cssText = `
      height: ${entryHeight};
      width: ${entryWidth};
      border: black solid 1px;
      padding: 10px;
    `;

    const boxTitle = document.createElement("h2");
    boxTitle.textContent = library[i].title;
    box.appendChild(boxTitle);

    const boxAuthor = document.createElement("p");
    boxAuthor.textContent = "By: " + library[i].author;
    box.appendChild(boxAuthor);

    const boxPages = document.createElement("p");
    boxPages.textContent = "Pages: " + library[i].pages;
    box.appendChild(boxPages);

    const boxButton = document.createElement("button");
    boxButton.addEventListener('click', (e) => {
      box.remove();
      for (let i = 0; i < library.length; i++) {
        if (library[i].title === boxTitle.textContent) {
          library.pop(i);
        }
      }
    });

    boxButton.classList.add('delete-button');
    box.appendChild(boxButton);

    bookList.appendChild(box);
  }
}

acotar.addBookToLibrary();
acotar1.addBookToLibrary();

displayBooks(library);

