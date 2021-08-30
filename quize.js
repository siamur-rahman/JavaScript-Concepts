let p = 'JavaScript ';
let q = p;
p = 'React';
// console.log(q);
// console.log(p);

// const isTrue = 'false';
// if (!isTrue) {
//    console.log('hello');
// }
// else { console.log('world'); }


function sum(p, q) {
   // console.log(p + q);
   // const sum = p + q;
   // return sum;
}
const result = sum(2, 3);
// console.log(result);

// if ('2' === 2) {
//    console.log('inside if')
// }
// else {
//    console.log('inside else')
// }

function work(x, y = 4) {
   return x + y;
}
console.log(work(32, 2));