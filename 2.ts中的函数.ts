// 3.1函数的定义
// ts中定义函数的方法

function run(): string {
  return 'run'
}

// 匿名函数
const f = function(): number {
  return 123
}
console.log('f(): ', f());

// 定义方法传参

// 3.2默认参数
function getIn(age: number = 1, n: string): string {
  return n + ' : ' + 'age is : ' + age
  
}
// console.log('getInfo(12): ', getIn(2, '999'));
// 3.3可选参数 必须配置到最后

function getInfo(n?: string, age?: number): string {
  return n + ' : ' + 'age is : ' + age
  
}
// console.log('getInfo(12): ', getInfo('999', 23));

// 3.4剩余参数
// function sum(a: number,b: number,c: number): number {
//   return a + b+ c
// }
function sum(a:number, ...args: number[]): number {
  return args.reduce((acc, e) => {
    return acc + e
  }, 0)
}
console.log(sum(1,23,3));


// 3.5、函数重载

function getIns(this: Window,name: string): string
function getIns(this: Window,age: number): number 
function getIns(this: Window, str: any): any {
// function getIns(this: Window, str: string|number): any {
  if (typeof str === 'string') {
    console.log(this, '----this111');
    return str
  } else {
    console.log(this, '----thi2s');
    return str
  }
} 

// console.log('getIns(): ', getIns.call(window, '323')); // ????
// console.log('getIns(): ', getIns(13)); 
// console.log('getIns(): ', getIns(true)); // err

// 3.6、箭头函数
type Fn = (a: string, b: number) => string
const fn2: Fn = (a, b) => {
  return a + b
}
console.log(fn2('1', 2));

export {}
