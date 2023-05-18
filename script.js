function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}


const book1 = new Book('Sales EQ', 'Jeb Blount', 288, 'Yes')
const book2 = new Book('Hooked', 'Nir Eyal', 171, 'Yes')
const book3 = new Book('Cloud Native Apps on GCP', 'Alasdair Gilchrist', 401, 'No')

let myLibrary = [book1, book2, book3]

const books = document.getElementById('books')

for (let i = 0; i < myLibrary.length; i++) {
  let book = document.createElement('li')
  book.innerHTML = `Title: ${myLibrary[i].title}, Author: ${myLibrary[i].author}, No of Pages: ${myLibrary[i].pages}, Read: ${myLibrary[i].read}`
  books.appendChild(book)
  let deleteButton = document.createElement("button")
  deleteButton.appendChild(document.createTextNode("delete"))
  book.appendChild(deleteButton)
  deleteButton.onclick = function() {
    this.parentElement.style.display = "none";
  }
}

let newBook = document.getElementById('new-book');
let author = document.getElementById('author');
let pages = document.getElementById('pages');
let read = document.getElementById('read');


document.querySelector('form.new-book-form').addEventListener('submit', function (e) {

    //prevent the normal submission of the form
    e.preventDefault();
    
    let book = document.createElement('li')
    let newBookObject = new Book(newBook.value, author.value, parseInt(pages.value), read.value)
    myLibrary.push(newBookObject)
    book.innerHTML = `Title: ${newBook.value}, Author: ${author.value}, No of Pages: ${parseInt(pages.value)}, Read: ${read.value}`
    books.appendChild(book)
    let deleteButton = document.createElement("button")
    deleteButton.appendChild(document.createTextNode("delete"))
    book.appendChild(deleteButton)
    deleteButton.onclick = function() {
      this.parentElement.style.display = "none";
    }
    document.querySelector('.new-book-form').reset()    
})