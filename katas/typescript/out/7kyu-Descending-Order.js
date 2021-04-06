"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.descendingOrder = void 0;
function descendingOrder(n) {
    const newNumber = n.toString().split('');
    const mapped = newNumber.map(Number).sort((n1, n2) => n2 - n1).join('');
    const mappedToNumber = Number(mapped);
    return mappedToNumber;
}
exports.descendingOrder = descendingOrder;
descendingOrder(1234);
