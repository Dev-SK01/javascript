var maxValue = Math.max(10,12,12,353,65,56);
console.log('Maximum Value : ' + maxValue);
var minValue = Math.min(10,12,12,353,65,56);
console.log('Minimum Value : ' + minValue);
console.log(Math);

console.log('Round function 1000.27  : ' + Math.round(1000.27));
console.log('Ceil function 1000.67  : ' + Math.ceil(1000.67));
console.log('Floor function 10.67  : ' + Math.floor(10.67));
console.log('Random function  : ' + Math.random());

var getRandom = function(from,to){
    return Math.floor(Math.random() * (to - from) + from);
}
var Languages = ['java' , 'javascript', 'Ruby' , 'Python' , 'C' , 'C++' , 'Dart' , 'Kotlin','Swift'];
var database  = ['SQL' , 'Postgres' , 'MangoDB' , 'MariaDB' ,'GraphQL','MySQL']; 
var RandomNumbers = getRandom(0,9);
console.log('BackEnd : ' ,Languages[getRandom(0,Languages.length)] , database[getRandom(0,database.length)]) ;

