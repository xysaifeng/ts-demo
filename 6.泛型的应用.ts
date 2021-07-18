// 6-6.泛型
// 把类当成参数的泛型类

class User {
  name!: string
  age!: number
}

class People<T> {
  add(user: T) {
    console.log(user, '----user');
    return false
  }
}
let u = new User
u.age = 3
u.name = 'tom'

let p = new People<User>()
// p.add(u)
p.add({name: 'to', age: 12}) // ok
// p.add({name: 'to',s: '23', age: 12}) // err
p.add(Object({age: 2,d: 2, name: 'd'})) // ok



interface IDb<T> {
  add(info: T): boolean
  update(info: T, id: number): boolean
  delete(id: number): boolean
  get(id: number): any[]
}


class MysqlDb<T> implements IDb<T> {
  add(info: T): boolean {
    console.log(info, '-info');
    return true
  }
  update(info: T, id: number): boolean {
    return true
  }
  delete(id: number): boolean {
    return true
  }
  get(id: number): any[] {
    throw new Error("Method not implemented.");
  }
}

class Users {
  uname: string | undefined
  pwd: string | undefined
}

let user = new Users()
user.uname = 'tom'
user.pwd = '134'
// user.age = '134' // err

var oMysql = new MysqlDb<Users>()
oMysql.add(user)  // ok
oMysql.add({uname: 'jack', pwd: '999'}) // ok

type IUser = {n: string, p: string}
var oMysqls = new MysqlDb<IUser>()
// oMysqls.add({ n: 's',ss: 1, p: 'd' }) // err
let o = { n: 's',ss: 1, p: 'd' }
oMysqls.add(o) // ok

export {}