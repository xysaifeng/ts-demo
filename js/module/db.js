"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Name = exports.save = void 0;
function save() {
    console.log('---sav');
}
exports.save = save;
function get() {
    console.log('get ---ata');
}
exports.default = get;
var Name;
(function (Name) {
    var People = /** @class */ (function () {
        function People() {
        }
        People.prototype.say = function () {
            console.log('say chines');
        };
        return People;
    }());
    Name.People = People;
})(Name = exports.Name || (exports.Name = {}));
