"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Encylopedia = /** @class */ (function (_super) {
    __extends(Encylopedia, _super);
    function Encylopedia(newTitle, newYear, edition) {
        var _this = _super.call(this, newTitle, newYear) || this;
        _this.edition = edition;
        return _this;
    }
    Encylopedia.prototype.printItem = function () {
        _super.prototype.printItem.call(this);
        console.log("Edition: " + this.edition + " (" + this.year + ")");
    };
    Encylopedia.prototype.printCitation = function () {
        throw new Error(this.edition + " - " + this.year);
    };
    return Encylopedia;
}(RefereceItem));
exports.Encylopedia = Encylopedia;
//# sourceMappingURL=classes.js.map