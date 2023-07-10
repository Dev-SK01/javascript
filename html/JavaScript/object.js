console.log('Reference DataType IN JS : ')

var student = new Object();
student.name =' Devsk ';  
student.dep = ' CSE ';
student.age = 19 ;
student.details = function (name,dep,age){
    console.log(student.name);
    console.log(student.dep);
    console.log(student.age);
}
// object funciton call 

student.details();
