import { RefereceItem } from './classes'

export default class Encylopedia extends RefereceItem {
    
    
    constructor(newTitle: string, newYear: number, public edition: number) {
        super(newTitle, newYear);
    }

    printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year})`);
    }
    
    printCitation(): void {
        throw new Error(`${this.edition} - ${this.year}`);
    }
}