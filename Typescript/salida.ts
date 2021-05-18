//types

var myString:string;
 myString = "hello <br>";

var myNumber:number = 22;

var myBoolean:boolean = false;

//strings

document.write(myString);
document.write(myNumber.toString());

//array 

var stringArray: string[] = ["1","2","3"];

var stringNumber: number[] = [1,2,3];

var stringBoolean: boolean[] = [false, true, true];

var ArrayAny: any[] = ["1", 2, false];

//tuple

var strNumTuple:[string, number];

strNumTuple = ["Hello", 23];

//void, undefined, null

//let myVacio: void = undefined;
//let myNulo: null = null;

//funciones

function getSum(num1:number, num2:number):number{
    return num1 + num2;
}

function mySum(num1:string | number, num2: string | number):number|number{

    if(typeof(num1) === 'string'){
        num1 = parseInt(num1);
    }else if(typeof(num2) === 'string'){
        num2 = parseInt(num2);
    };
    return num1 + num2;

}

function getName(firstName:string, lastName?:string):string{
    document.write(`<br>${firstName} ${lastName}`);
}

getName("Marcos");


//interface

interface IToDo{
    title:string;
    text:string
}

function showToDo(ToDo:IToDo){
    console.log(`${ToDo.title} ${ToDo.text}`);
};

let show:IToDo = {title:'eat dinner', text:'lorem'}

showToDo(show);


//clases

class user {
    name:string;
    email:string;
    age:number;

    constructor(name:string, email:string, age:number){ // this.name es igual a name i este name es el dato dentro del constructor que luego es el dato que se pasa por new user
        this.name = name;
        this.email = email;
        this.age = age;
    }

    register() {
        console.log(`${this.name} is registered`);
    }

    showMeAge(){
        return this.age
    }

    ageInYears(){
        return this.age + 'years';
    }

    payInvoice(){
        console.log(`${this.name} paide invoice`);
    }
}


var john = new user('john', 'john@gmail.com', 28);

console.log(john.ageInYears());

class member extends user {

    id:string

    constructor(id, name, email, age){
        super(name,email,age);
        this.id = id;
    }

    payInvoice(){
        super.payInvoice();
    };
};

var gordon = new member('123', 'Gordon', 'gordon@gmail.com', 34);

gordon.payInvoice();


















