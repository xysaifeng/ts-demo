"use strict";
// 3.1函数的定义
// ts中定义函数的方法
Object.defineProperty(exports, "__esModule", { value: true });
function run() {
    return 'run';
}
// 匿名函数
var f = function () {
    return 123;
};
console.log('f(): ', f());
// 定义方法传参
// 3.2默认参数
function getIn(age, n) {
    if (age === void 0) { age = 1; }
    return n + ' : ' + 'age is : ' + age;
}
// console.log('getInfo(12): ', getIn(2, '999'));
// 3.3可选参数 必须配置到最后
function getInfo(n, age) {
    return n + ' : ' + 'age is : ' + age;
}
// console.log('getInfo(12): ', getInfo('999', 23));
// 3.4剩余参数
// function sum(a: number,b: number,c: number): number {
//   return a + b+ c
// }
function sum(a) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args.reduce(function (acc, e) {
        return acc + e;
    }, 0);
}
console.log(sum(1, 23, 3));
function getIns(str) {
    // function getIns(this: Window, str: string|number): any {
    if (typeof str === 'string') {
        console.log(this, '----this111');
        return str;
    }
    else {
        console.log(this, '----thi2s');
        return str;
    }
}
var fn2 = function (a, b) {
    return a + b;
};
console.log(fn2('1', 2));
