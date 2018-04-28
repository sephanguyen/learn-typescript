import { Category } from './enums';
import { IBook, IDamegeLogger, IAuthor, ILibrarian } from './interfaces';
import { UniversityLibrarian, RefereceItem, IMagazine } from './classes';
import {Purge} from './lib/utilityFunctions'
import Shelf from './shelf';
import refBook from './encyclopedia';

let reference = new refBook('Fact book', 2016, 1);

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
 
// let ref : RefereceItem = new RefereceItem('Facts and Figures', 2016);
// ref.printItem();
// ref.publisher = 'Random Data Publishing';
// console.log(ref.publisher);
// let refBook : RefereceItem = new Encylopedia('WordPedia', 1900, 10);
// refBook.printItem();


//class expression
// let NewSpaper = class extends RefereceItem {
//     printCitation(): void {
//         console.log(`Newspaper: ${this.title}`);
//     }
// }

// let myPaper = new NewSpaper('The Gazette', 2016);
// myPaper.printCitation();

let inventory: Array<IBook> = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Sowftware},
    { id: 11, title: 'Code Complete', author: 'Steve McConnel', available: true, category: Category.Sowftware},
    { id: 12, title: '8-Bit Graphics with Colbol', author: 'A. B.', available: true, category: Category.Sowftware},
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D. ', available: true, category: Category.Sowftware}
]
let purgedBooks: Array<IBook> = Purge<IBook>(inventory);
purgedBooks.forEach(book => console.log(book.title));

let purgedNumbers: Array<number> = Purge<number>([1, 2, 3]);
console.log(purgedNumbers);

let bookShelf: Shelf<IBook> = new Shelf<IBook>();
inventory.forEach(book => bookShelf.add(book));

let firtsBook: IBook = bookShelf.getFirst();

let magazines: Array<IMagazine> = [
    {title: 'Programming Language Monthly', publisher: 'Code Mags'},
    {title: 'Literary Fiction Quartely', publisher: 'College Press'},
    {title: 'Five Points', publisher: 'GSU'},
]

let magazineShelf: Shelf<IMagazine> = new Shelf<IMagazine>();
magazines.forEach(mag => magazineShelf.add(mag));
let firstMagazine: IMagazine = magazineShelf.getFirst();
magazineShelf.printTitles();

let softwareBook = bookShelf.find('Code Complete');
console.log(`${softwareBook.title} (${softwareBook.author})`)