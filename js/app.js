"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("./enums");
var utilityFunctions_1 = require("./lib/utilityFunctions");
var shelf_1 = require("./shelf");
var encyclopedia_1 = require("./encyclopedia");
var reference = new encyclopedia_1.default('Fact book', 2016, 1);
function GetAllBooks() {
    var books = [
        { id: 1, title: 'Ulysees', author: 'James Joyce', available: true, category: enums_1.Category.Fiction },
        { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: true, category: enums_1.Category.Fiction },
        { id: 3, title: 'I Know Why The Caged Brid Signs', author: 'Maya Angelou', available: true, category: enums_1.Category.Poetry },
    ];
    return books;
}
function LogFirstAvailable(books) {
    var numberOfBooks = books.lenght;
    var firstAvailable = '';
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var currentBook = books_1[_i];
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log('Total Books: ' + numberOfBooks);
    console.log('First Available: ' + firstAvailable);
}
function GetBookTitlesByCategory(categoryFilter) {
    console.log('Getting books in category: ' + enums_1.Category[categoryFilter]);
    var allBooks = GetAllBooks();
    var filteredTitles = [];
    for (var _i = 0, allBooks_1 = allBooks; _i < allBooks_1.length; _i++) {
        var currentBook = allBooks_1[_i];
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }
    return filteredTitles;
}
function LogBookTitles(titles) {
    for (var _i = 0, titles_1 = titles; _i < titles_1.length; _i++) {
        var title = titles_1[_i];
        console.log(title);
    }
}
// const allBooks = GetAllBooks();
// LogFirstAvailable(allBooks);
//************* */
// const peotryBooks = GetBookTitlesByCategory(Category.Poetry);
// LogBookTitles(peotryBooks);
function GetBookByID(id) {
    var allBooks = GetAllBooks();
    return allBooks.filter(function (book) { return book.id === id; })[0];
}
function CreateCustumorID(name, id) {
    return name + id;
}
;
function CreateCustomer(name, age, city) {
    console.log('Creating customer ' + name);
    if (age) {
        console.log('Age: ' + age);
    }
    if (city) {
        console.log('City: ' + city);
    }
}
function CheckOutBooks(customer) {
    var bookIDs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        bookIDs[_i - 1] = arguments[_i];
    }
    console.log('Checking out books for ' + customer);
    var booksCheckedOut = [];
    for (var _a = 0, bookIDs_1 = bookIDs; _a < bookIDs_1.length; _a++) {
        var id = bookIDs_1[_a];
        var book = GetBookByID(id);
        if (book.available) {
            booksCheckedOut.push(book.title);
        }
    }
    return booksCheckedOut;
}
function GetTitles(bookProperty) {
    var allBooks = GetAllBooks();
    var foundTitles = [];
    if (typeof bookProperty == 'string') {
        for (var _i = 0, allBooks_2 = allBooks; _i < allBooks_2.length; _i++) {
            var book = allBooks_2[_i];
            if (book.author === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    else if (typeof bookProperty == 'boolean') {
        for (var _a = 0, allBooks_3 = allBooks; _a < allBooks_3.length; _a++) {
            var book = allBooks_3[_a];
            if (book.available === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    return foundTitles;
}
function PrintBook(book) {
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
var inventory = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: enums_1.Category.Sowftware },
    { id: 11, title: 'Code Complete', author: 'Steve McConnel', available: true, category: enums_1.Category.Sowftware },
    { id: 12, title: '8-Bit Graphics with Colbol', author: 'A. B.', available: true, category: enums_1.Category.Sowftware },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D. ', available: true, category: enums_1.Category.Sowftware }
];
var purgedBooks = utilityFunctions_1.Purge(inventory);
purgedBooks.forEach(function (book) { return console.log(book.title); });
var purgedNumbers = utilityFunctions_1.Purge([1, 2, 3]);
console.log(purgedNumbers);
var bookShelf = new shelf_1.default();
inventory.forEach(function (book) { return bookShelf.add(book); });
var firtsBook = bookShelf.getFirst();
var magazines = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quartely', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' },
];
var magazineShelf = new shelf_1.default();
magazines.forEach(function (mag) { return magazineShelf.add(mag); });
var firstMagazine = magazineShelf.getFirst();
magazineShelf.printTitles();
var softwareBook = bookShelf.find('Code Complete');
console.log(softwareBook.title + " (" + softwareBook.author + ")");
//# sourceMappingURL=app.js.map