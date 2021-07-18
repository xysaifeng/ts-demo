// 9.装饰器
//

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


function logClass (p: string) {
  return function (target:any){
    // console.log('target: ', target);
  }
}

function logProp(params: any) {
  console.log('params: 00', params);
  return function (target: any, key: string) {
    // console.log(arguments, '----arg');
    console.log('key: ', key);
    console.log('target: ', target) // true
   setTimeout(() => {
    console.log('target: ', target === HttpClient.prototype); // true
   }, 1000);

   target[key] = 'uuu'
  }
}

@logClass('jid')
class HttpClient {

  @logProp('hello')
  // url:string = 'aaaa'
  url!:string
  constructor() {
  }
  getData() {
    console.log(this, '000');
    console.log('this.xx: ', this.url); // uuu
  }
}

let h:any = new HttpClient()
console.log(h);

h.getData()