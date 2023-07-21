// Printing 1 to 10 ;

let firstNum = 0 ;
while(firstNum <= 10){
 console.log(`${firstNum}`);
 firstNum++ ;
};

// Printing Odd Number Using While Loop.
let evenNum = 0 ;
while(evenNum < 10){
    ++evenNum; //1 -> 3 ....
    console.log(evenNum);
    evenNum ++ ; //2 --> 4
};

//  converting mail

function removeMail(mail){
   if(typeof mail === 'string'){
    //check if is it mail or not.
         if(mail.includes('@') === false){
            return console.log('Enter A correct Mail !')
         }
         else{
            var removed = mail.split('@');
            return console.log('Email Sender Name : ' , removed[0]);
         }
      
   }
   else{
      return console.log('Please Enter String Mail!');
   }
}
removeMail('google@gmail.com');