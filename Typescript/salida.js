//types
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var myString;
myString = "hello <br>";
var myNumber = 22;
var myBoolean = false;
//strings
document.write(myString);
document.write(myNumber.toString());
//array 
var stringArray = ["1", "2", "3"];
var stringNumber = [1, 2, 3];
var stringBoolean = [false, true, true];
var ArrayAny = ["1", 2, false];
//tuple
var strNumTuple;
strNumTuple = ["Hello", 23];
//void, undefined, null
//let myVacio: void = undefined;
//let myNulo: null = null;
//funciones
function getSum(num1, num2) {
    return num1 + num2;
}
function mySum(num1, num2) {
    if (typeof (num1) === 'string') {
        num1 = parseInt(num1);
    }
    else if (typeof (num2) === 'string') {
        num2 = parseInt(num2);
    }
    ;
    return num1 + num2;
}
function getName(firstName, lastName) {
    document.write("<br>" + firstName + " " + lastName);
}
getName("Marcos");
function showToDo(ToDo) {
    console.log(ToDo.title + " " + ToDo.text);
}
;
var show = { title: 'eat dinner', text: 'lorem' };
showToDo(show);
//clases
var user = /** @class */ (function () {
    function user(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    user.prototype.register = function () {
        console.log(this.name + " is registered");
    };
    user.prototype.showMeAge = function () {
        return this.age;
    };
    user.prototype.ageInYears = function () {
        return this.age + 'years';
    };
    user.prototype.payInvoice = function () {
        console.log(this.name + " paide invoice");
    };
    return user;
}());
var john = new user('john', 'john@gmail.com', 28);
console.log(john.ageInYears());
var member = /** @class */ (function (_super) {
    __extends(member, _super);
    function member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    ;
    return member;
}(user));
;
var gordon = new member('123', 'Gordon', 'gordon@gmail.com', 34);
gordon.payInvoice();
