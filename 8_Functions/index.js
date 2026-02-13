"use strict";
// turn on in tsconfid.json
// noUnusedParameters
// noImplicitReturns
// noUnusedLocals
Object.defineProperty(exports, "__esModule", { value: true });
// : after() tells what kind of number to return
// instead of , in thousands, use _
// ? makes it optional ie: taxYear?
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
// normally you could add another parameter, ie: calculateTaxYear(10,000, 20)
// taxYear is already defined above
calculateTax(10_000);
//# sourceMappingURL=index.js.map