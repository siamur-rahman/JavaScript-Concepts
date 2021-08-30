
/*function welcomeMessage(name) {
   console.log(name);

}
const name = 'Tom Hanks';
welcomeMessage(name);//function er parameter hisebe ekta variable k pathanu zai
*/
/*
function welcomeMessage(name) {
   console.log(name);

}
const names = ['Tom Hanks', 'Tom Brady', 'Tom Cruise'];
welcomeMessage(names);//function er parameter hisebe ekta array k pathanu zai

*/
/*
function welcomeMessage(name) {
   // console.log(name);

}
const myObj = { name: 'Tom Hanks', age: 20 }
welcomeMessage(myObj);////function er parameter hisebe ekta object k pathanu zai
*/



/*//||||||||||||||||||||||||||||||||||||||||||||
function welcomeMessage(name) {
   console.log(name);
   name();
}
function greetMorning() {
   console.log('Good Morning');
}
welcomeMessage(greetMorning);

function ta zokhon parameter hisebe zai tokhon zodi vitore abar call kore taile function tai call hoye zai..ekhane greetMorning function,,welcomeMessage er parameter
hisbe gelo...to welcome message er vitore zehetu parameter ta k call korlo er mane greeting function k call korlo
*/

/*
function welcomeMessage(greetHandler) {
   console.log(greetHandler);
   greetHandler();
}
function greetMorning() {
   console.log('Good Morning');
}
welcomeMessage(greetMorning);*/


/*

function welcomeMessage(name, greetHandler) {
   // console.log(greetHandler);
   greetHandler(name);
}

function greetMorning(name) {
   console.log('Good Morning', name);
}
welcomeMessage('Tom Hanks', greetMorning);
welcomeMessage('Sakib Hanks', greetMorning);


*/


function welcomeMessage(name, greetHandler) {
   // console.log(greetHandler);
   greetHandler(name);
}

function greetMorning(name) {
   console.log('Good Morning', name);
}
function greetAfternoon(name) {
   console.log('Good Afternoon', name);
}
welcomeMessage('Tom Hanks', greetMorning);
welcomeMessage('Sakib Hanks', greetAfternoon);


//evabe onk function likhe kora zai.........

function handleclick() {
   console.log('button is ckicked');
}
document.getElementById('my-btn').addEventListener('click', handleclick)

document.getElementById('my-btn').addEventListener('click', function handleclick() {
   console.log('button is ckicked');
})