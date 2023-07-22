// Printing 1 to 10 ;

let firstNum = 0;
while (firstNum <= 10) {
   console.log(`${firstNum}`);
   firstNum++;
};

// Printing Odd Number Using While Loop.
let evenNum = 0;
while (evenNum < 10) {
   ++evenNum; //1 -> 3 ....
   console.log(evenNum);
   evenNum++; //2 --> 4
};

//  converting mail

function removeMail(mail) {
   var removed = [];
   // looping the email array
   for (i = 0; i < mail.length; i++) {

      if (typeof mail[i] === 'string') {
         //check if is it mail or not.
         if (mail[i].includes('@') === false) {
            return console.log('Enter A correct Mail !')
         }
         else {

            removed.push(mail[i].slice(0, mail[i].indexOf('@')));

         }

      }
      else {
         return console.log('Please Enter String Mail!');
      }
      
   }
   return console.table(removed);
}
Email = ['google@gmail.com', 'Yahoo@mail.com', 'Facebook@mail.com', 'Instagram@mail.com'];
removeMail(Email);

// First case As Upper Case

function asProperCase(mystring){
   var upcase = mystring[0].toUpperCase();
   var sli = mystring.slice(1).toLowerCase();
   return console.log(`Input String : ${mystring}\n`,`Output String : ${upcase + sli}`);
}

asProperCase('welcome to JAVAscript');
// let arr = str.split(' ');
// console.log(arr);
// console.log(str[0].toLocaleUpperCase())


