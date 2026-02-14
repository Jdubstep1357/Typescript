"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getCustomer(id) {
    return id === 0 ? null : { birthdate: new Date() };
}
let customer = getCustomer(0);
// if (customer !== null && customer !== undefined)
// console.log(customer.birthdate);
// SIMPLER WAY
console.log(customer?.birthdate?.getFullYear());
// Optional element access operator
// if (customers !== null && customers !=- undefined)
// customers?.[0]
// Optional call
let log = null;
// will only work if log is referencing an actual funciton. otherwise undefined
log?.('a');
//# sourceMappingURL=index.js.map