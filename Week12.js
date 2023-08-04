//book class creation
class Book{
    constructor (title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
    }
    get bookTitle(){
        return this.title;
    }

    set bookTitle(newTitle){
        this.title = newTitle;
    }

    get bookAuthor(){
        return this.author;
    }

    set bookAuthor(newAuthor){
        this.author = newAuthor;
    }
}

//magazine sub class creation
class Magazine extends Book{
    constructor (title, author, ISBN, issueNumber){
        super(title, author, ISBN);
        this.issueNumber = issueNumber;
    }

    get magazineIssueNumber(){
        return this.issueNumber;
    }

    set magazineIssueNumber(newIssueNumber){
        this.issueNumber = newIssueNumber;
    }
}


//3. Library class cration and exe 4 here also
class Library {
    constructor(name){
        this.book = [];
        this.name = name;
    }


//addBook method
    addBook(book){
        this.book = [...this.book, book]; //same as this.book.push(book)
    }

//removeBook method
    removeBook(ISBN){
        this.book = this.book.filter((book) =>book.ISBN !== ISBN);
    }

//findBooksByAuthor method
    findBooksByAuthor(author){
        return this.book = this.books.filter((book) => book.author === author)
    }

//listBooks method
    listBooks(){
        return this.books.forEach((book) => {
            console.log(`Title: ${book.title}, Author: ${book.Author}. ISBN: ${book.ISBN}`)
        })
    }

    //getTotalBooks method
    getTotalBooks(){
        return this.books.length;
    }

    //getBooksWithTitleContaining
    getBooksWithTitleContaining(keyWork){
        let booksFound = []
        //return this.books = this.book.filter((book) => {
        //    book.title.includes(`${keyWord}`)
        //})
        this.books.forEach((book) => {
            if(book.title.includes(keyWord)){
                booksFound.push(book)
            }
        })
        return booksFound;
    }

    //getUniqueAuthors method
    getUniqueAuthors(){
        ///for(let i = 0; i < this.books.length; i++){
          //  if(this.books[i].author !== )
        //}
        // const author = ['kb', 'k1', 'kk', 'kb', 'k1', 'ka']
        const uniqueAuthors= [...new Set(this.books.map(book => book.autjor))];
        return uniqueAuthors;
    }

    //getTotalBooksByAuthor method
    getTotalBooksByAuthor(author){
        let numOfBooksByAuthor = [];
        this.book.forEach((book) => {
            if(book.author === author){
                numOfBooksByAuthor.push(1)
            }
        })
        const totalBooks = numOfBooksByAuthor.reduce((prev, current) => {
            return prev + current;
        })
                return totalBooks;
    }

}



const book1 = new Book('Harry Potter', 'JK Rolling', '2342342');
const book2 = new Book('Capra cu 3 iezi', 'Ion Creanga', '2327658');
const book3 = new Book('Lord of the rings', 'Tolkien', '2704064');
const book4 = new Book('Lord of the rings part 2', 'Tolkien', '2344064');
const book5 = new Book('Lasa vrajeala', 'Paul Melinte', '6432635');

const library = new Library('UTCN');

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);

//library.removeBook('2342342');

//library.listBooks();

//console.log(`Total number of book is : ${library.getTotalBooks()}`);

//console.log(library.findBooksByAuthor('Tolkien'));

//console.log(library.getBooksWithTitleContaining('Lord'));

//console.log(`This was found as the unique author in the library: ${library. getUniqueAuthors()}`);

//console.log(`Number of books per author ${library.getTotalBooksByAuthor()}`);

//console.log(library);

//console.log(book1.bookTitle);