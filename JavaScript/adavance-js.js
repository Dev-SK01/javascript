console.log('NUll Colasking');
let nullColasking = null;
console.log(nullColasking ?? 'It Is Null Value!');
let num1 = 100.00, num2 = 100;
console.log(parseFloat(num1), typeof (num1));
console.log(parseInt(num2), typeof (num2));

//  todo arrow function ; 
var sumOfNumbers = (num1, num2) => {
    return console.log('Anonymous Function : ', num1 + num2);
};

sumOfNumbers(100, 200);

// todo Scopes In Js

var A = 10;
let B = 20;
const C = 30
console.log('Global var : ', A);
console.log('Global let : ', B);
console.log('Global const : ', C);

function function_Scope() {

    var A = 11;
    let B = 20 + 1;
    const C = 30 + 1;
    console.log('Function var : ', A);
    console.log('Function let : ', B);
    console.log('Function Const : ', C);

    if (true) {
        var A = 12;
        let B = 22;
        const C = 32;
        console.log('Block var : ', A);
        console.log('Block let : ', B);
        console.log('Block const : ', C);
    }
}
function_Scope();

// todo spread operator ; 

let myarray_1 = ['let','const','let'];
let myarray_2 = ['let-1','const-1','let-1'];
let spreadOperator = [...myarray_1,...myarray_2];
console.log('Spread Operator Concatination : ' ,spreadOperator);

// todo MultiDimentions Array : 
let array = ['MultiDimetions','Array']; // string also one array .
console.log(array[0][0]);

// todo object inheritence  

const OriginalObject = {
    name : 'Original Object',
    age : 20 ,
    Print : function(){
       return console.log(this.name , this.age);
    }
};
OriginalObject.Print();

const InheritedObject = Object.create(OriginalObject);
InheritedObject.name = 'Inherited Object';
InheritedObject.Print();

function printObjKeys(obj1 ,obj2){
    console.log(Object.keys(obj1));
    console.log(Object.keys(obj2));
};

function printObjValues(obj1 ,obj2){
    console.log(Object.values(obj1));
    console.log(Object.values(obj2));
    // console.log(arguments[0].name);
};

printObjKeys(OriginalObject,InheritedObject);
printObjValues(OriginalObject,InheritedObject);

// todo   Acessing Object in For In Loop . 

for ( let properties in OriginalObject){
    console.log(properties);
    console.log(OriginalObject[properties]);
}

// todo             Destructuring The Object. 

const {name : AnotherName} = OriginalObject ;
console.log(`Destructuring The Object : ${AnotherName}`);

const{name,age,print} = OriginalObject;
console.log(`Destructuring The Object:${name} ${age} ${print} `);

// todo             passing the function variable . 

function Destructure_Function({age}){
    return console.log(`Destructuring The Object Using Function : ${age}` );
}

Destructure_Function(OriginalObject);