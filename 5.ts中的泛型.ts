// 6.泛型
// 理解： 就是解决 类 接口 方法的复用性、以及对不特定数据类型的支持

// 6.1 泛型的定义
// 6.2 泛型函数
// 6.3 泛型类
// 6.4 泛型接口



// 6.1 泛型的定义
type IFn<T> = (p: T) => T

// const getData = <T>(params: T): T => {
//   // return 1 as unknown as T
//   return params
// }

function getData<T>(params: T): T {
  // return 1 as unknown as T
  return params
}

let r = getData(2)
let r2 = getData('s')


// 6.2 泛型函数
// 6.3 泛型类
class Myclass {
  public list: number[]= []

  add(num: number) {
    this.list.push(num)
  }
  min() {
    let minNum = this.list[0]
    for(let i = 0; i< this.list.length; i ++) {
      if (minNum > this.list [i]) {
        minNum = this.list[i]
      }
    }
    return minNum
  }
}

let m = new Myclass()
m.add(2)
m.add(23)
m.add(10)
m.add(110)
m.add(-1)

// console.log(m.min());

class Min<T> {
  public list: T[] = []
  add(val: T): void {
    this.list.push(val)
  }
  min() {
    let minNum = this.list[0]
    for(let i: number = 0; i< this.list.length; i ++) {
      if (minNum > this.list [i]) {
        minNum = this.list[i]
      }
    }
    return minNum 
  }
}

let min = new Min<string>()

min.add('b')
min.add('r')
min.add('f')
min.add('j')
const rs = min.min()
console.log(rs);

// 6.4 泛型接口

interface IData<T> {
  // (p1: T, p2: T): ({[x: string]: T})
  (p1: T, p2: T): T
}
const setData: IData<string> = (a, b) => {
  return a + b
}

let res = setData('1,', 's')
console.log('res: ', res);


interface IConfig {
  <T>(v: T): T
}

var getFn: IConfig = function<T>(value: T): T  {
  return value
}

const rst = getFn<string>('243')


export {}
