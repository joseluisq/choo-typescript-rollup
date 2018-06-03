export interface Book {
  id: number
  title: string
  author: string
  isbn: string
  created_at: Date
  updated_at?: Date
}

export interface Library {
  book (id: number): Book
  books (): Book[]
  addBook (book: Book): void
}

export class Library implements Library {
  private stock: Book[]

  constructor () {
    this.stock = []
  }

  addBook (book: Book): void {
    this.stock.push(book)
  }

  books (): Book[] {
    return this.stock
  }

  book (id: number): Book {
    return this.stock[id]
  }
}
