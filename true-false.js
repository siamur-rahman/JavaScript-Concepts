/* 
Falsy:
false
0
emptystring
NaN
undefined
null

Truthy:
true
any number (positive or negative)
any string including single white space
'0'
'false'
[]
{}
anything else that is not falsy will be truthy
*/

const x = false;//ans:variable is falsy
if (x) {
   console.log('variable is truthy');
}
else {
   console.log('variable is falsy')
}


const x1 = true;//ans:variable is truthy
if (x1) {
   console.log('variable is truthy');
}
else {
   console.log('variable is falsy')
}


const x2 = 4;//ans:variable is truthy
if (x2) {
   console.log('variable is truthy');
}
else {
   console.log('variable is falsy')
}

const x3 = -44;//ans:variable is truthy
if (x3) {
   console.log('variable is truthy');
}
else {
   console.log('variable is falsy')
}

const x4 = 0;//ans:variable is falsy
if (x4) {
   console.log('variable is truthy');
}
else {
   console.log('variable is falsy')
}
const x41 = '0';//ans:variable is falsy
if (x41) {
   console.log('variable is truthy');
}
else {
   console.log('variable is falsy')
}

const x5 = 'Solaiman khan';//ans:variable is truthy
if (x5) {
   console.log('variable is truthy');
}
else {
   console.log('variable is falsy')
}

const x6 = ' ';//ans:variable is falsy
if (x6) {
   console.log('variable is truthy');
}
else {
   console.log('variable is falsy')
}
const x7 = '';//ans:variable is falsy
if (x7) {
   console.log('variable is truthy');
}
else {
   console.log('variable is falsy')
}


//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
let m;
console.log('value of m', m);//ans:undefined(kono variable diclare na korle seta undefined hoi)
if (m) {
   console.log('variable is truthy');
}
else {
   console.log('variable is falsy')//ans:variable is falsy(konokichu zodi undefined hoi tahole seta falsy)
}

let m1 = null; //sorasori null declare kora zai
console.log('value of m1', m1);
if (m1) {
   console.log('variable is truthy');
}
else {
   console.log('variable is falsy')//ans:variable is falsy(konokichu zodi null hoi tahole seta falsy)
}

let m3 = parseInt('hello');//ans:NaN ......... string k parseint korte gele eita bole dibe karon string songkha na
console.log(m3);
if (m3) {
   console.log('variable is truthy');
}
else {
   console.log('variable is falsy')//ans:variable is falsy(konokichu zodi NaN hoi tahole seta falsy)
}

let m4 = [];
if (m4) {
   console.log('variable is truthy');
}
else {
   console.log('variable is falsy')//ans:variable is truthy(konokichu zodi emty array [ ] hoi tahole seta truthy)
}

let m5 = {};
if (m5) {
   console.log('variable is truthy');
}
else {
   console.log('variable is falsy')//ans:variable is truthy(konokichu zodi emty object {} hoi tahole seta truthy)
}
