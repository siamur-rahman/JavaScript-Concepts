function stopWatch() {
   let counter = 0;
   return function () {

      counter++;

      return counter;
   }

}
let clock1 = stopWatch();
let clock2 = stopWatch();
let clock3 = stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock2());
console.log(clock2());
console.log(clock1());
console.log(clock2());
console.log(clock3());
console.log(clock3());
console.log(clock1());
console.log(clock2());

//what is closure in java script(google koro)
//why we should use closure ans:zodi ekta function er vitore ekta function k use koro ba function k return koro taile se tar (ei j j function take return kortecho se zodi outside er kono variable k access kore taile tar nijosso ekta incapsulation toiri kore fele)

//incapsulation ba closure ba private variable declare kore
//protteke nijer ekta man toiri kore