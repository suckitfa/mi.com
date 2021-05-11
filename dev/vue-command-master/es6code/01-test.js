class Car {
    constructor(sName, iDoors) {
        this._name = sName;
        this.doors = iDoors;
    };

    // 访问器属性
    get desc() {
        return `${this.name} is worth having`;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    };

    // static只能通过类名来访问
    static createDefult() {
        return new Car("Audi", 4);
    }
}

let car = new Car("Benz", 4);
// 实际上是调用 name(){}方法
// 由于是方法实现，可以添加额外的访问控制或者代码逻辑。
console.log(car.name);
console.log(car.desc);
car.name = "Ferrari";
console.log(car.name);
// car.prototype.desc = "very good";
let mycar = Car.createDefult();
console.log(mycar.name);
console.log(mycar.desc);