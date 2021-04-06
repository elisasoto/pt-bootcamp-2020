"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pigIt = void 0;
function pigIt(p) {
    const toArr = p.split(' ');
    const mapping = toArr.map((item, index) => {
        const spliting = item.split('');
        const [head, ...rest] = item;
        const joinedrest = rest.join('');
        const plusAy = head.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/) ? head : head + 'ay';
        const together = joinedrest.concat(plusAy);
        return together;
    });
    const joinedmap = mapping.join(' ');
    console.log(joinedmap);
    return joinedmap;
}
exports.pigIt = pigIt;
pigIt('uisQay ustodietcay psosiay ustodescay !');
