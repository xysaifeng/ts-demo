"use strict";
// 9.装饰器
//
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 没有传参数
// function logClass (param: any) {
//   console.log('param: ', param);
//   param.prototype.apiUrl = 'xxx'
//   // setTimeout(() => {
//   //   console.log('param === HttpClient: ', param === HttpClient); // true
//   // }, 1000);
// }
// @logClass
// class HttpClient {
//   // apiUrl!: string
//   constructor() {
//   }
//   getData() {
//   }
// }
// let h:any = new HttpClient()
// console.log('h: ', h.apiUrl);
// 传参
// function logClass (param: string) {
//   return function(target: any) {
//     console.log(target); // HttpClient
//     console.log(param); // hell0
//   }
// }
// @logClass('hell0')
// class HttpClient {
//   // apiUrl!: string
//   constructor() {
//   }
//   getData() {
//   }
// }
// let h:any = new HttpClient()
// // console.log('h: ', h.apiUrl);
// 装饰构造函数
// function logClass (target: any) {
//   console.log('target: ', target);
//   return class extends target {
//     apiUrl: string = 'jack'
//     name: string = 'world'
//     getData() {}
//   }
// }
// @logClass
// class HttpClient {
//   apiUrl!: string
//   constructor() {
//     this.apiUrl = 'wwww.ba'
//   }
//   getData() {
//   }
// }
// let h:any = new HttpClient()
// console.log(h);
// 属性装饰器
function logClass(p) {
    return function (target) {
        // console.log('target: ', target);
    };
}
function logProp(params) {
    console.log('params: 00', params);
    return function (target, key) {
        // console.log(arguments, '----arg');
        console.log('key: ', key);
        console.log('target: ', target); // true
        setTimeout(function () {
            console.log('target: ', target === HttpClient.prototype); // true
        }, 1000);
        target[key] = 'uuu';
    };
}
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.prototype.getData = function () {
        console.log(this, '000');
        console.log('this.xx: ', this.url); // uuu
    };
    __decorate([
        logProp('hello')
    ], HttpClient.prototype, "url", void 0);
    HttpClient = __decorate([
        logClass('jid')
    ], HttpClient);
    return HttpClient;
}());
var h = new HttpClient();
console.log(h);
h.getData();
