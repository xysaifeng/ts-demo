"use strict";
// 6-6.泛型
// 把类当成参数的泛型类
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var People = /** @class */ (function () {
    function People() {
    }
    People.prototype.add = function (user) {
        console.log(user, '----user');
        return false;
    };
    return People;
}());
var u = new User;
u.age = 3;
u.name = 'tom';
var p = new People();
// p.add(u)
p.add({ name: 'to', age: 12 }); // ok
// p.add({name: 'to',s: '23', age: 12}) // err
p.add(Object({ age: 2, d: 2, name: 'd' })); // ok
var MysqlDb = /** @class */ (function () {
    function MysqlDb() {
    }
    MysqlDb.prototype.add = function (info) {
        console.log(info, '-info');
        return true;
    };
    MysqlDb.prototype.update = function (info, id) {
        return true;
    };
    MysqlDb.prototype.delete = function (id) {
        return true;
    };
    MysqlDb.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return MysqlDb;
}());
var Users = /** @class */ (function () {
    function Users() {
    }
    return Users;
}());
var user = new Users();
user.uname = 'tom';
user.pwd = '134';
// user.age = '134' // err
var oMysql = new MysqlDb();
oMysql.add(user); // ok
oMysql.add({ uname: 'jack', pwd: '999' }); // ok
var oMysqls = new MysqlDb();
// oMysqls.add({ n: 's',ss: 1, p: 'd' }) // err
var o = { n: 's', ss: 1, p: 'd' };
oMysqls.add(o); // ok
