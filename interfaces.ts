import { Category } from './enums';

interface IBook {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages? : number;
    markDamaged?: IDamegeLogger;
}

interface IDamegeLogger {
    (reason : string): void;
}

interface IPerson {
    name: string;
    email: string;
}

interface IAuthor extends IPerson {
    numBooksPublished: number;
}

interface ILibrarian extends IPerson {
    department: string;
    assistCustomer: (custName: string) => void;
}


export { IBook, IDamegeLogger, IAuthor, ILibrarian };