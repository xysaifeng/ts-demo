"use strict";
// 8.命名空间
// 命名空间和模块的区别
// 命名空间：内部模块，主要用于组织代码 避免命名冲突
// 模   块：ts的外部模块的简称，侧重代码的复用，一个模块里可能会有多个命名空间
Object.defineProperty(exports, "__esModule", { value: true });
// 命名空间同名会合并
// 命名空间可以嵌套
// 新版ts不支持了
// /// <reference path="db.ts" />  
var db_1 = require("./db");
var A;
(function (A) {
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        Animal.prototype.eat = function () {
            console.log('吃东西');
        };
        return Animal;
    }());
})(A || (A = {}));
(function (A) {
    var Animal2 = /** @class */ (function () {
        function Animal2() {
        }
        Animal2.prototype.eat = function () {
            console.log('吃东西2');
        };
        return Animal2;
    }());
    A.Animal2 = Animal2;
    var B;
    (function (B) {
        function say() {
            console.log('say hello ');
        }
    })(B = A.B || (A.B = {}));
})(A || (A = {}));
var a = new A.Animal2();
a.eat(); // 吃东西
console.log(A);
console.log(new db_1.Name.People().say());
