// 导出变量
export var color = "red";
export let name = "module";
export const sizeOfPage = 10;

// 导出函数
export function sum(a, b) {
    return (a + b);
}

// 暂且留在文件末尾导出
function substract(a, b) {
    return (a - b);
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return (a / b);
}

// 导出类
export class Car {
    constructor(color, iDoors) {
        this.color = color;
        this.iDoors = iDoors;
    }
    showColor() {
        console.log(this.color);
    }
}

// 模块的私有变量 <= 不导出
var count = 0;

function chanageCount() {
    count++;
}


// 文件末尾集中导出
export { multiply };
// 取别名
// 模块内部名称为: substract ，模块外部名为:sub
export { subtract as sub };
// 导出默认模块
export default divide;


// export {
//     color,
//     name,
//     sizeOfPage,
//     Car,
//     multiply,
//     subtract as sub,
//     divde as
//     default
// }