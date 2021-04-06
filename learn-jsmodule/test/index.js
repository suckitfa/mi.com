import * as mymodule from './Modules';
const a = 1,
    b = 3;
let result = mymodule.sub(a, b);
console.log(`1 -3 = ${result}`);
// SyntaxError: Cannot use import statement outside a module