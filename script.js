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
  book.innerHTML = myLibrary[i].title
  books.appendChild(book)
}

// try {
//   function addBookToLibrary(books, inputBook) {
//     console.log(inputBook.value);
//     let newBook = document.createElement('li')
//     newBook.innerHTML = inputBook.value
//     books.appendChild(newBook)
//     return false 
//   }
// } catch (error) {
//   console.log(error)
// }


var nameInput = document.getElementById('name');

document.querySelector('form.pure-form').addEventListener('submit', function (e) {

    //prevent the normal submission of the form
    e.preventDefault();

    console.log(nameInput.value);  
    
    let book = document.createElement('li')
    book.innerHTML = nameInput.value
    books.appendChild(book)
});