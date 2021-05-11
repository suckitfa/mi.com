class Person {
    constructor(name) {
        this.name = name;
    }
    work() {
        console.log("working ...........");
    }
}
class Student extends Person {
    constructor(name, no) {
        // 通过super调用父类的构造函数
        super(name);
        this.no = no;
    }

}