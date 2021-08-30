const a = 'alim uddin';



/*
const nums = [23, 12, 56];
console.log(typeof nums);//object
//Array.isArry (nums)

function tripple(x, y, z) {

}
console.log(typeof tripple);//function
console.log(tripple.length);//1(function er parameter zoto ta diba toto ta dekhabe ,,mane function er koita parameter ache)

console.log(typeof null);//object
*/


/*
const nums = [23, 12, 56];
console.log(typeof nums);//object
//Array.isArry (nums)

function tripple(x, y, z) {
   x = 111;
   y = 222;
   z = 333;
}
const num1 = 3;
const num2 = 5;
const num3 = 7;
 tripple(num1, num2, num3);
console.log(num1, num2, num3)*/


const nums = [23, 12, 56];
console.log(typeof nums);//object
//Array.isArry (nums)

function tripple(x, y, z) {
   x.age = 333;
   // y = 222;
   // z = 333;
}
const num1 = 3;
const num2 = 5;
const num3 = 7;
const myObj = { name: 'kuddus', age: 17 };
tripple(myObj);
console.log(myObj)
