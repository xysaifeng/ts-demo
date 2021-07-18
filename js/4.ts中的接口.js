"use strict";
// 5.ts中 的接口
// 接口的作用：在面向对象的编程中，接口是一种规范的定义 它定义了行为和动作的规范，在程序设计里面 接口起到一种限制和规范的作用
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
// 5.1 属性接口： 对json的约束
function prints(labelInfo) {
    console.log(labelInfo);
}
// prints({firstName: '2', lastName: '3', age: 32}) // err
// prints({firstName: '2', lastName: '3'}) // ok
var o = { firstName: '2', lastName: '3', age: 32 };
prints(o); // ok
// var md5: IEncrypt = function(key: string, value: string): string {
var md5 = function () {
    return 'key' + 'value';
};
md5('s', '3');
// var arr: IArr = [1,2] // err
// var arr2: IArr = ['3', 'false']
var arr2 = {
    a: function name(params) {
        return '1';
    },
    1: 's'
};
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.say = function () {
        console.log('sss');
    };
    return Person;
}());
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Web.prototype.eat = function () { };
    Web.prototype.work = function () { };
    return Web;
}(Person));
