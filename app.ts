import { Category } from './enums';
import { IBook, IDamegeLogger, IAuthor, ILibrarian } from './interfaces';
import { UniversityLibrarian } from './classes';

function GetAllBooks() : IBook[] {
    
    let books = [
        {id : 1, title: 'Ulysees', author: 'James Joyce', available: true, category: Category.Fiction},
        {id : 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: true, category: Category.Fiction},
        {id : 3, title: 'I Know Why The Caged Brid Signs', author: 'Maya Angelou', available: true, category : Category.Poetry},
    ]
    return books;
}

function LogFirstAvailable(books) : void{

    let numberOfBooks : number = books.lenght;
    let firstAvailable : string = '';

    for (const currentBook of books) {
        
        if(currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log('Total Books: ' + numberOfBooks);
    console.log('First Available: ' + firstAvailable);
}


function GetBookTitlesByCategory(categoryFilter : Category) : Array<string> {

    console.log('Getting books in category: ' + Category[categoryFilter]);

    const allBooks = GetAllBooks();
    const filteredTitles : string[] = [];

    for (const currentBook of allBooks) {
        if(currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }

    return filteredTitles;
}

function LogBookTitles(titles : string[]) : void {

    for (const title of titles) {
        console.log(title);
    }
}

// const allBooks = GetAllBooks();
// LogFirstAvailable(allBooks);
//************* */



// const peotryBooks = GetBookTitlesByCategory(Category.Poetry);
// LogBookTitles(peotryBooks);
function GetBookByID(id : number) : IBook {
    const allBooks = GetAllBooks();
    return allBooks.filter(book => book.id === id)[0];
}


function CreateCustumorID(name : string, id : number) : string {
    return name + id;
};

function CreateCustomer(name :string, age? : number, city? : string) : void {
    console.log('Creating customer ' + name);

    if(age) {
        console.log('Age: ' + age);
    }

    if(city) {
        console.log('City: ' + city);
    }
}

function CheckOutBooks(customer: string, ...bookIDs : number[]) : string[] {
    console.log('Checking out books for ' + customer);

    let booksCheckedOut : string[] = [];

    for(let id of bookIDs) {
        let book = GetBookByID(id);
        if(book.available) {
            booksCheckedOut.push(book.title);
        }
    }
    return booksCheckedOut;
}

function GetTitles(author : string) : string[];
function GetTitles(available : boolean) : string[];
function GetTitles(bookProperty : any) : string[] {
    const allBooks = GetAllBooks();
    const foundTitles : string[] = [];
    if (typeof bookProperty == 'string') {
        for (const book of allBooks) {
            if(book.author === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    else if(typeof bookProperty == 'boolean') {
        for (const book of allBooks) {
            if(book.available === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    return foundTitles;
}

function PrintBook(book : IBook) : void {
    console.log(book.title + ' by ' + book.author);
}
/**********************************************/

let myBook : IBook=  {
    id : 5,
    title : 'Pride and Prejudice',
    author : 'Jane Austen',
    available : true,
    category : Category.Fiction,
    pages : 250,
    markDamaged : (reason : string) => console.log('Dameged ' + reason)
}

// PrintBook(myBook);
// myBook.markDamaged('missing back cover');

let logDamage : IDamegeLogger;
logDamage = (damage : string) => console.log('Damege repoted: ' + damage);

logDamage('coffee stains');


let favoriteLibrarian : ILibrarian = new UniversityLibrarian();
favoriteLibrarian.name = 'Sharon';
favoriteLibrarian.assistCustomer('Lynda')