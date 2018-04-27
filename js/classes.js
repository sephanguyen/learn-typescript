"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UniversityLibrarian = /** @class */ (function () {
    function UniversityLibrarian() {
    }
    UniversityLibrarian.prototype.assistCustomer = function (custName) {
        console.log(this.name + ' is assisting ' + custName);
    };
    return UniversityLibrarian;
}());
exports.UniversityLibrarian = UniversityLibrarian;
var RefereceItem = /** @class */ (function () {
    function RefereceItem(title, year) {
        this.title = title;
        this.year = year;
        console.log('Create a new ReferenceItem...');
    }
    RefereceItem.prototype.printItem = function () {
        console.log(this.title + " was published in " + this.year + ".");
    };
    Object.defineProperty(RefereceItem.prototype, "publisher", {
        get: function () {
            return this._publisher.toUpperCase();
        },
        set: function (newPublisher) {
            this._publisher = newPublisher;
        },
        enumerable: true,
        configurable: true
    });
    return RefereceItem;
}());
exports.RefereceItem = RefereceItem;
//# sourceMappingURL=classes.js.map