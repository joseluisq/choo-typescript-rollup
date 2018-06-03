import { Book, Library } from './library'

const library: Library = new Library()

const book: Book = {
  id: 1,
  title: 'Fausto',
  author: 'Goethe',
  isbn: '9788437606774',
  created_at: new Date()
}

library.addBook(book)

console.log(
  library.books()
)
