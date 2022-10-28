function sayHello(person: string) {
    return 'Hello, ' + person;
}

let user = 'Tom';
console.log(sayHello(user));

let createBoolean: boolean = Boolean(true)
console.log(typeof createBoolean)

let myName: string = 'Tom';
let myAge: number = 25;

// 模板字符串
let sentence: string = `Hello, my name is ${myName}.    I'll be ${myAge + 1} years old next month.`;


let unionType : number| string;

unionType = 1
unionType = 'jeremy'

