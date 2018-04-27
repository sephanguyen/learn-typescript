import { IBook, IDamegeLogger, IAuthor, ILibrarian } from './interfaces'

class UniversityLibrarian implements ILibrarian {
    name: string;
    email: string;
    department: string;

    assistCustomer(custName: string) {
        console.log(this.name + ' is assisting ' + custName);
    }
}

abstract class RefereceItem {

    private _publisher: string;

    constructor(protected title: string, protected year: number) {
        console.log('Create a new ReferenceItem...');
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}.`);
    }

    get publisher(): string {
        return this._publisher.toUpperCase();
    }
    
    set publisher(newPublisher : string) {
        this._publisher = newPublisher;
    }

    abstract printCitation(): void;
}


export { UniversityLibrarian, RefereceItem };