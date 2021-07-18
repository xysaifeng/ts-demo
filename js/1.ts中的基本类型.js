"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var s = '你好';
var n = 'asd';
var ns = true;
// 2.ts中的数据类型
// 布尔类型(boolean)
// 数字类型(numbr)
// 字符串类型(string)
// 数组类型(array)
// 元祖类型(tuple)
// 枚举类型(enum)
// 任意类型(any)
// null和undefined
// void类型()
// nerver类型()
// 1.布尔类型(boolean)
var flag = !3;
// flag = 1 // err
flag = true; // ok
// 2.数字类型(numbr)
var a = 123;
// a = 's' // err
// a = BigInt(13) // err
a = -12.2; // ok
// console.log(a);
// 3.字符串类型(string)
var str = 'this is ts';
// str = 8 // err
str = String('9');
// 4.数组类型(array) ts中定义数组有两种类型
// es5  let arr = [1, '2', false]
// 第一种第一数组的方式
var arr = [1, 2, 3, 'f', false];
// let arr: number[] = [] // ok
// 第二种第一数组的方式 泛型方式
// let arr2: Array<number> = [1,,3] // err
var arr2 = [1, 3];
// let tuple: [string, number, boolean] = ['2', 2, false, 1] // 不能多
var tuple = ['2', 2, false,];
// 6.枚举类型(enum)：
// 定义 事先考虑到某一变量可能取的值，尽量用自然语言中含义清楚的单词来表示它的每一个值，这种方法称为枚举，用这种方法定义的类型称为枚举类型
// 用于： 标识状态或一些固定值
/**
 * enum 枚举名 {
 *  标识符[ =整型常数],
 *  标识符[ =整型常数],
 *  ....
 * }
 *
 *  payStatus 0 未支付 1 支付  2 已完成
 */
// const enum Flag {
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = -1] = "error";
})(Flag || (Flag = {}));
var f = Flag.error;
// console.log('f: ', f);
// console.log(Flag[1]); // success
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = 5] = "blue";
    Color[Color["green"] = 6] = "green";
})(Color || (Color = {}));
var c = Color.green;
// console.log(c, '----c'); // 2
// console.log(Color[1], '----c1'); // undefined
// console.log(Color[0], '----c1'); // red
// console.log(Color.green, '----c1'); // 6
// 7.任意类型(any)
var num = 1223;
num = false;
// console.log(num);
// 任意类型 的用处
var oBox = document.getElementById('box');
// console.log('oBox: ', oBox);
// (oBox as HTMLElement).style.color ='red'
// oBox!.style.color ='red'
oBox.style.color = 'red';
// 8.null和undefined 
// let num2: number;
// console.log(num2); // 爆红
// let num2: null;
// console.log(num2); // 爆红
// let num2: undefined;
// console.log(num2); // ok
var num2;
console.log(num2); // ok
// let nu: undefined
// nu = null // err
// 9.void类型() ts中的void表示没有任何类型，一般用于定义方法的时候方法没有返回值
// function run(): undefined { // err
function run() {
    console.log(1232);
    // return 1 // err
}
run();
var ss = null;
var aa;
aa = (function () {
    throw new Error('s');
})();
