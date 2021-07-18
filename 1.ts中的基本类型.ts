let s: string = '你好'

let n: any = 'asd'

let ns: boolean = true


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
var flag: boolean = !3
// flag = 1 // err
flag = true // ok

// 2.数字类型(numbr)
let a: number = 123
// a = 's' // err
// a = BigInt(13) // err
a = -12.2 // ok
// console.log(a);
// 3.字符串类型(string)
let str: string = 'this is ts'
// str = 8 // err
str = String('9')

// 4.数组类型(array) ts中定义数组有两种类型
// es5  let arr = [1, '2', false]

// 第一种第一数组的方式
let arr: (number | string | boolean)[] = [1, 2, 3, 'f', false]
  // let arr: number[] = [] // ok

  // 第二种第一数组的方式 泛型方式
  // let arr2: Array<number> = [1,,3] // err
  let arr2: Array<number> = [1,3]


  // 5.元祖类型(tuple) 属于数组的一种 可以指定数组每个元素的类型 可以指定多种类型 
  type Tuple = [string, number, boolean]
  // let tuple: [string, number, boolean] = ['2', 2, false, 1] // 不能多
  let tuple: Tuple = ['2', 2, false, ]


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
 enum Flag {
    success = 1,
    error = -1
  }
  let f = Flag.error
  // console.log('f: ', f);
  // console.log(Flag[1]); // success

  enum Color {red, blue = 5, green}
  let c: Color = Color.green
  // console.log(c, '----c'); // 2
  // console.log(Color[1], '----c1'); // undefined
  // console.log(Color[0], '----c1'); // red
  // console.log(Color.green, '----c1'); // 6

  // 7.任意类型(any)
  let num: any = 1223
  num = false
  // console.log(num);

  // 任意类型 的用处
  let oBox: any  = document.getElementById('box')
  // console.log('oBox: ', oBox);
  // (oBox as HTMLElement).style.color ='red'
  // oBox!.style.color ='red'
  oBox.style.color ='red'

  // 8.null和undefined 
  // let num2: number;
  // console.log(num2); // 爆红

  // let num2: null;
  // console.log(num2); // 爆红

  // let num2: undefined;
  // console.log(num2); // ok
  let num2: number | undefined;
  console.log(num2); // ok

  // let nu: undefined
  // nu = null // err

  // 9.void类型() ts中的void表示没有任何类型，一般用于定义方法的时候方法没有返回值

  // function run(): undefined { // err
  function run(): void {
    console.log(1232);
    // return 1 // err
  }
  run()

  // 10.nerver类型(): 其他类型 (包括null和 undefined)的子类型，代表从不会出现的值
  // 这意味着声明nerver的变量只能 被nerver类型赋值

  type N = never
  type nn = null
  let ss:nn = null

  let aa: never
  aa = (() => {
    throw new Error('s')
  })()


  export {}