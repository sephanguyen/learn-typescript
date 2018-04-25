function GetAllBooks() {
    
    let books = [
        {title: 'Ulysees', author: 'James Joyce', available: true, category: Category.Fiction},
        {title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: true, category: Category.Fiction},
        {title: 'I Know Why The Caged Brid Signs', author: 'Maya Angelou', available: true, category : Category.Poetry},
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

enum Category { Biography, Poetry, Fiction, History, Children}

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

const peotryBooks = GetBookTitlesByCategory(Category.Poetry);
LogBookTitles(peotryBooks);