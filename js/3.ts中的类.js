"use strict";
// 4、ts中的类
// 4.1类的定义
// 4.2类的继承
// 4.3类里的修饰符
// 4.4类的静态属性和方法
// 4.4抽象类 继承 和多态
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// 4.1类的定义
// class Person {
//   name: string // 属性 前面省略了public关键字
//   constructor(n: string) {
//     this.name = n
//   }
//   run():void {
//     console.log(this.name);
//   }
//   getName(): string {
//     return this.name
//   }
//   setName(name: string): void {
//     this.name = name
//   }
// }
// let p = new Person('张三')
// console.log('p: ', p);
// // p.run()
// console.log(p.getName());
// p.setName('李四')
// console.log(p.getName());
// 4.2类的继承  extends super
// class Person {
//   name: string 
//   constructor(n: string) {
//     this.name = n
//   }
//   run():string {
//     return this.name
//   }
// }
// let p = new Person('张三')
// console.log(p.run());
// class Web extends Person {
//   constructor(name: string) {
//     super(name)
//   }
// }
// let w = new Web('李四')
// console.log('w: ', w.run());
// 4.3类里的修饰符 ts提供了三种修饰符
// 1.public : 公有， 在类里面 子类  类外面可以访问
// 2.protected：保护类型 在类里面 子类里面可以访问 在类外面不能访问
// 2.private：私有 在类里面 可以访问 在子类里面 和 在类外面不能访问
// class Person {
//   // protected readonly name: string; // 公有属性
//   private  name: string; // 公有属性
//   constructor(n: string) {
//     this.name = n
//   }
//   run():string {
//     return this.name + ' 跑步'
//   }
// }
// class Web extends Person {
//   constructor(name: string) {
//     super(name)
//   }
//   work() {
//     // this.name ='jd' 不能修改
//     return this.name+ ' 在工作' // err
//   }
// }
// let p = new Person('张三')
// // console.log('p: ', p.run());
// // console.log('p: ', p.name); // err
// // p.name = 'd' // err
// let w = new Web('李四')
// console.log('w: ', w.work());
// 4.4类的静态属性和方法 继承 多态
// class Person {
//   public static age: number = 123
//   private  name: string; // 公有属性
//   constructor(n: string) {
//     this.name = n
//   }
//   static print() {
//     console.log(this.age, 'static fn');
//   }
//   run():string {
//     return this.name + ' 跑步'
//   }
// }
// class Web extends Person {
//   constructor(name: string) {
//     super(name)
//   }
// }
// let p = new Person('张三')
// let w = new Web('李四')
// Person.print()
// console.log(Person.age);
// 多态 父类定义一个方法不去实现 让继承的子类去实现 没个子类 有不同的表现
// 多态也是继承的一种表现
// class Animal {
//   constructor(public name: string) {
//   }
//  eat() { // 具体吃什么 不知道 让继承的子类去实现
//   console.log(this.name, '----吃');
//  }
// }
// class Dog extends Animal {
//   constructor(name: string) {
//     super(name)
//   }
//   eat() {
//     return this.name + '吃肉'
//   }
// }
// class Cat extends Animal {
//   constructor(name: string) {
//     super(name)
//   }
//   eat() {
//     return this.name + '吃老鼠'
//   }
// }
// let p = new Animal('张三')
// let d = new Dog('小花')
// 4.4抽象类： 它是体积功其他类继承的基类 不能被实例化
// 用abstract关键字定义抽象类和抽象方法 抽象类中的抽象方法不包含具体的实现并且必须在派生类中实现
// abstract方法只能放在抽象类里面
// 抽象类和抽象方法用来定义标准 eg: Animal抽象类要求继承他的子类必须包含eat方法
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
// let a  = new Animal() // err: 无法创建抽象类的实例。
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    // 抽象类的子类必须实现抽象类里面的抽象方法
    function Dog(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        // age = '2' // err
        _this.age = 23; // ok
        return _this;
    }
    Dog.prototype.eat = function () {
        console.log(this.name + '吃狗粮');
    };
    return Dog;
}(Animal));
var dog = new Dog('小哥');
dog.eat();
