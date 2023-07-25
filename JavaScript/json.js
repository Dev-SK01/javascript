// todo Creating Object Into JSON 

class student{
    constructor(name , age , dep ,college){
        this.name = name ; 
        this.college  = college ; 
        this.age = age ; 
        this.dep = dep ;
    }

    GetDetails(){
        return console.log(`${this.name} ${this.age} ${this.dep} ${this.college}`);
    }
};

const Student01 = new student('Srikanth','20','CSE','RMD');
Student01.GetDetails();

// todo Creating object into JSON;
const ToJSON = JSON.stringify(Student01);
console.log(ToJSON);

//  todo    JSON To Object : 

const To_Object = JSON.parse(ToJSON);
console.log(To_Object);
