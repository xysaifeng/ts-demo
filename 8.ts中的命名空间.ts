// 8.命名空间
// 命名空间和模块的区别
// 命名空间：内部模块，主要用于组织代码 避免命名冲突
// 模   块：ts的外部模块的简称，侧重代码的复用，一个模块里可能会有多个命名空间

// 命名空间同名会合并
// 命名空间可以嵌套

// 新版ts不支持了
// /// <reference path="db.ts" />  
import {Name} from './db'
namespace A {
  class Animal {
    eat() {
      console.log('吃东西');
    }
  }
}
namespace A {
  export class Animal2 {
    eat() {
      console.log('吃东西2');
    }
  }
  export namespace B {
     function say() {
      console.log('say hello ');
    }
  }
}
let a = new A.Animal2()
a.eat() // 吃东西

console.log(A);

console.log(new Name.People().say());