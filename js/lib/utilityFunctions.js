"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function CaculateLateFee(daysLate) {
    return daysLate * .25;
}
exports.CaculateLateFee = CaculateLateFee;
function MaxBooksAllowed(age) {
    if (age < 12) {
        return 3;
    }
    else {
        return 10;
    }
}
exports.MaxBooksAllowed = MaxBooksAllowed;
function privateFunc() {
    console.log('This is private....');
}
function Purge(inventory) {
    return inventory.splice(2, inventory.length);
}
exports.Purge = Purge;
//# sourceMappingURL=utilityFunctions.js.map