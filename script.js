
let myLibrary = []

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary(book) {
  myLibrary.push(book)
}

addBookToLibrary(new Book('Sales EQ', 'Jeb Blount', 288, 'Yes'))
addBookToLibrary(new Book('Hooked', 'Nir Eyal', 171, 'Yes'))
addBookToLibrary(new Book('Cloud Native Apps on GCP', 'Alasdair Gilchrist', 401, 'No'))

function loadBooks () {
  const books = document.getElementById('books')

  for (let i = 0; i < myLibrary.length; i++) {
    let book = document.createElement('li')

    let bookTitle = document.createElement('div')
    bookTitle.innerHTML = myLibrary[i].title
    bookTitle.classList.add('title', 'is-4')
    book.appendChild(bookTitle)

    let bookAuthor = document.createElement('div')
    bookAuthor.innerHTML = `by ${myLibrary[i].author}`
    bookAuthor.classList.add('subtitle', 'is-6', 'is-italic')
    book.appendChild(bookAuthor)

    let pageNo = document.createElement('div')
    pageNo.innerHTML = `No of Pages: ${myLibrary[i].pages}`
    pageNo.classList.add('content')
    book.appendChild(pageNo)

    let didRead = document.createElement('div')
    didRead.innerHTML = `Read: ${myLibrary[i].read}`
    didRead.classList.add('content')
    book.appendChild(didRead)


    let column = document.createElement('div')
    column.classList.add('column')
    

    book.classList.add('card', 'card-content','is-half')
    column.appendChild(book)

    books.appendChild(column)

    let deleteButton = document.createElement("button")
    deleteButton.appendChild(document.createTextNode("Delete"))
    deleteButton.classList.add('button', 'is-danger')
    book.appendChild(deleteButton)

    deleteButton.onclick = function() {
      this.parentElement.style.display = "none";
    }
  }
}

loadBooks()



let newBook = document.getElementById('new-book');
let author = document.getElementById('author');
let pages = document.getElementById('pages');
let read = document.getElementsByName('read');




document.querySelector('form.new-book-form').addEventListener('submit', function (e) {

    //prevent the normal submission of the form
    e.preventDefault();


    for (i = 0; i < read.length; i++) {
      if (read[i].checked)
          read.value = read[i].value
    }
    
    const books = document.getElementById('books')
    let book = document.createElement('li')

    let newBookObject = new Book(newBook.value, author.value, parseInt(pages.value), read.value)
    addBookToLibrary(newBookObject)

    let bookTitle = document.createElement('div')
    bookTitle.innerHTML = newBook.value
    bookTitle.classList.add('title', 'is-4')
    book.appendChild(bookTitle)

    let bookAuthor = document.createElement('div')
    bookAuthor.innerHTML = `by ${author.value}`
    bookAuthor.classList.add('subtitle', 'is-6', 'is-italic')
    book.appendChild(bookAuthor)

    let pageNo = document.createElement('div')
    pageNo.innerHTML = `No of Pages: ${parseInt(pages.value)}`
    pageNo.classList.add('content')
    book.appendChild(pageNo)

    let didRead = document.createElement('div')
    didRead.innerHTML = `Read: ${read.value}`
    didRead.classList.add('content')
    book.appendChild(didRead)

    let column = document.createElement('div')
    column.classList.add('column')
    

    book.classList.add('card', 'card-content', 'is-half')
    column.appendChild(book)

    books.appendChild(column)

    let deleteButton = document.createElement("button")
    deleteButton.appendChild(document.createTextNode("Delete"))
    deleteButton.classList.add('button', 'is-danger')
    book.appendChild(deleteButton)
    deleteButton.onclick = function() {
      this.parentElement.style.display = "none";
    }

    document.querySelector('.new-book-form').reset()
    const modal = document.getElementById('modal-js-example')
    modal.classList.remove('is-active');
})


// JS for Modal

document.addEventListener('DOMContentLoaded', () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add('is-active');
  }

  function closeModal($el) {
    $el.classList.remove('is-active');
  }

  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button .submitBookBtn') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener('keydown', (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) { // Escape key
      closeAllModals();
    }
  });
});