console.log("Function In Js")

// basic Function Creation

function basic() {
    console.log("Welcome To Js World !");
}

basic();

// html get input and show function
function greet(name, msg) {
    if (name) {

        console.log("hello " + name + msg);
    }
    else {
        console.log("testing the return statement !");

    }
}
greet('hi', 'welcome');

var days = 1;

while (days <= 7) {
    switch (days) {
        case 1:
            console.log('Day ' + days + ' Sunday');
            break;
        case 2:
            console.log( 'Day ' + days + ' Monday');
            break;
        case 3:
            console.log('Day ' + days + ' Tuesday');
            break;
        case 4:
            console.log('Day ' + days + ' Wednesday');
            break;
        case 5:
            console.log('Day ' + days + ' Thursday');
            break;
        case 6:
            console.log('Day ' + days + ' Friday');
            break;
        case 7:
            console.log('Day ' + days + ' Saturday');
            break;
        default :
            console.log('Loop Not Excuted');
    }
    days++;
}

//   todo                    Detailed View Of Function

var ConstructorSyntax = new Function( 'num1' , 'num2' , 'return num1 + num2');
console.log('ConstructorFunction : ' + ConstructorSyntax(1 ,254));

var literalSyntax = function(num1,num2){
    return num1 + num2 ;
}

console.log('literalSyntax : ' , literalSyntax(1,254));

var asValue = literalSyntax;

console.log('Function as Value : ' + asValue(' Hello ', ' Learner!'));

//  todo            Arguments Method 
var argsObject = function (){
    console.log(arguments);
};
argsObject(2,3);

var valuateArgs = function(){
    return Array.from(arguments).reduce(function(accum,value){
        return accum + value;
    })
};

console.log('Valuation Without Function Arguments 1 : ' +valuateArgs(120,120,34,90));
console.log('Valuation Without Function Arguments 2 : ' +valuateArgs(120,120,34,100));
  
//  todo            IIFE
(function IIFE(name){
    console.log( 'Named IIFE : ' + name);
})('Hi I am IIFE Funciton ): ');
