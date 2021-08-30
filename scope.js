function add(first, second) {
   const result = first + second;
   return result;
}
const sum = add(11, 35);
console.log(sum);//ans: 46  (sum global scope e (mane local scope er baire) tai global scope theke khujle pabo)

// console.log(first);//ans: first is not defined ....error dibe (first local scope er vitore ,,,baire theke (global scope theke)  khujle pawa zabe na)

// console.log(result);//ans: result is not defined ....error dibe (result local scope er vitore ,,,,baire theke (global scope theke)  khujle pawa zabe na)


//GLOBAL SCOPE
const favNum = 27;
function add2(first, second) {
   //LOCAL SCOPE
   const result = first + second;
   if (result > 9) {
      //BLOCK SCOPE

      const mood = 'happy';
      // console.log(mood);//ans:happy (block scope er vitore declare kora hoiche tai paichi,,,,scope er baire gele kaj korbe na)
   }
   console.log(mood);//ans:mood is not defined  (block scope er baire declare kora hoiche tai error khabo,,,,scope er baire gele kaj korbe na)
   return result;
}
const sum2 = add2(11, 35);
console.log(sum2);