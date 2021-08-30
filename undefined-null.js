/*


*/

let first;//variable declare kore setar kono man dea hoi nai
// console.log(first);//ans:undefined

function second(x, y) {
   const sum = x + y;
}
const result = second(3, 5);
// console.log(result);//ans:undefined  (function er vitor return na kore call kora hoiche)



function add(a, b) {
   const sum = a + b;
   return;
   const fun = a * b;
   return fun;
}

const result2 = add(3, 5);
// console.log(result2);//ans:undefined (function er vitore return kora hoiche but ki return korbe seta bole deya hoini)


function add2(a, b) {
   const sum = a + b;
   if (a < 10) {
      return;//
   }
   const fun = a * b;
   return fun;
}

const result3 = add2(6, 5);
// console.log(result3);

function double(a, b) {
   const result = a * b;
   // console.log(b);//ans:undefined
   return result;
}

const x8 = double(81);//parameter e b er value deya nai tai b undefined hobe
// console.log(x8);//ans:NaN


const fifth = { name: 'sogir ', age: 23, location: 'bandarbon' };
console.log(fifth.name);//ans: sogir
console.log(fifth.phone);//undefined  (karon phone property nai)

const sixth = [54, 65, 44, 33, 33];

console.log(sixth);//ans: [ 54, 65, 44, 33, 33 ]
console.log(sixth[4]);//ans:33  (evabe 0 1 2 3 4 przonto pawa zabe)
console.log(sixth[6]);//ans: undefined  (arry er index eto tuk nai)

const seventh = [54, 65, 44, 33, 33];
delete seventh[2];//evabe kora uchit na (splice diye kora uchit)
console.log(seventh);//ans:[ 54, 65, <1 empty item>, 33, 33 ]  (delete korar por sei jaiga empty hoye zai)

console.log(seventh[2]);//ans:undefined   (delete korar por sei jaiga empty hoye zai tokhon abar oi position e kaoke khujte gele undefined hoi)


const eight = undefined;
console.log(eight);//ans:undefined   (sorasori value hisebe set kore dile)





const myObj = { name: 'samad', profession: null }