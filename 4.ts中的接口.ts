// 5.ts中 的接口
// 接口的作用：在面向对象的编程中，接口是一种规范的定义 它定义了行为和动作的规范，在程序设计里面 接口起到一种限制和规范的作用

// 5.1 属性接口
// 5.2 函数接口
// 5.3 可索引接口
// 5.3 类类型接口
// 5.3 接口扩展

// 接口： 对行为和动作的规范 对批量方法进行约束
interface IFullName {
  firstName: string
  lastName: string
  // [prop: string]: unknown

}
// 5.1 属性接口： 对json的约束
function prints(labelInfo: IFullName): void {
  console.log(labelInfo);
}
// prints({firstName: '2', lastName: '3', age: 32}) // err
// prints({firstName: '2', lastName: '3'}) // ok

let o = {firstName: '2', lastName: '3', age: 32}
prints(o) // ok

// 5.2 函数接口:对方法传入的参数以及返回值进行约束
interface IEncrypt {
  (key: string, value: string): string
}

// var md5: IEncrypt = function(key: string, value: string): string {
var md5: IEncrypt = function(): string {
  return 'key' + 'value'
}
md5('s','3')

// 5.3 可索引接口 数组对象的约束 （不常用）
interface IArr {
  a: (a: string) => string
  // (a: string): void
  [index: number]: string
}
// var arr: IArr = [1,2] // err
// var arr2: IArr = ['3', 'false']
var arr2: IArr = {
  a: function name(params:string): string {
    return '1'
  },
  1:  's'
}




// 5.3 类类型接口 对类的约束 和抽象类相似
// interface IAnimal {
//   name: string
//   eat(str: string): any
// }

// class Animal implements IAnimal {
//   age = 1+0
//   constructor(public name: string, age: number) {
//     this.age = age
//   }
//   eat(f: string) {
    
//   }
// }


// 5.3 接口扩展: 可以继承接口
interface IAnimal {
  eat(str: string): any
}

interface IPerson extends IAnimal  {
  work() : void
}
interface IPerson  {
  name: string
}

class Person {
  say() {
    console.log('sss');
  }
}

class Web extends Person implements IPerson {
  name!: string
  eat() {}
  work() {}
}


export {}