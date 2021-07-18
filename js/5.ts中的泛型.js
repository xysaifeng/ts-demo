"use strict";
// 6.泛型
// 理解： 就是解决 类 接口 方法的复用性、以及对不特定数据类型的支持
Object.defineProperty(exports, "__esModule", { value: true });
// const getData = <T>(params: T): T => {
//   // return 1 as unknown as T
//   return params
// }
function getData(params) {
    // return 1 as unknown as T
    return params;
}
var r = getData(2);
var r2 = getData('s');
// 6.2 泛型函数
// 6.3 泛型类
var Myclass = /** @class */ (function () {
    function Myclass() {
        this.list = [];
    }
    Myclass.prototype.add = function (num) {
        this.list.push(num);
    };
    Myclass.prototype.min = function () {
        var minNum = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    };
    return Myclass;
}());
var m = new Myclass();
m.add(2);
m.add(23);
m.add(10);
m.add(110);
m.add(-1);
// console.log(m.min());
var Min = /** @class */ (function () {
    function Min() {
        this.list = [];
    }
    Min.prototype.add = function (val) {
        this.list.push(val);
    };
    Min.prototype.min = function () {
        var minNum = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    };
    return Min;
}());
var min = new Min();
min.add('b');
min.add('r');
min.add('f');
min.add('j');
var rs = min.min();
console.log(rs);
var setData = function (a, b) {
    return a + b;
};
var res = setData('1,', 's');
console.log('res: ', res);
var getFn = function (value) {
    return value;
};
var rst = getFn('243');
