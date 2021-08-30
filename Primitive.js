/*
javascript e 7 dhoroner datatypes ache...

1) number
2)string
3)boolian
4)undefined
5)null
7)symbol(es6 e asche)

data types k abar duita broad catagory te vag korche

1)premitive(sohoj sorol mane eder ekta man thkebe shudhu)
ekta string likhle ba ekta shongkha likhle,ba true or false ekta man likhcho eigule k premitive datatype bole.


2)non-premitive
object non-premitive data type

*/


let a = 'hello';
let b = a;
console.log(a, b);//ans:hello hello 

a = 'gello';//premitive data type tai ekta change hobe
console.log(a, b);//ans:gello hello
//agula k bola hoi IMMUTABLE


const x = { job: 'Web Developer' }
const y = x;
console.log(x, y);//ans:{ job: 'Web Developer' } { job: 'Web Developer' }

x.job = 'front end developer'//non-premitive data type tai duitai change hobe
console.log(x, y);//ans:{ job: 'front end developer' } { job: 'front end developer' }

