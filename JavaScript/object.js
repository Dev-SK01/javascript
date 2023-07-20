console.log('Reference DataType IN JS : ')

// * objecr constructor syntax
var student = new Object();
student.name = ' Devsk ';
student.dep = ' CSE ';
student.age = 19;
student.details = function (name, dep, age) {
    console.log(this.name);
    console.log(this.dep);
    console.log(this.age);
}
// ? object funciton call 
student.details();

// ? object literal syntax : 
var employee = {
    Name: 'XXXXX',
    Age: 20,
    ID: '001001',
    profession: 'entreprenuer',
    details: function () {
        console.log('Name : ' + this.Name)
        console.log('AGE  : ' + this.Age)
        console.log('ID   : ' + this.ID)
        console.log('Profession : ' + this.profession)
        console.log('Hobby : ' + this.Hobby);
        console.log('Status : ' + this.status);
    }
};

// ? employee function call
employee.details();

// ? this keyword example
var employee2 = employee;
console.log(employee2);
employee2.details();

// ? [] Uses In Object : 

employee['Hobby'] = 'Music';
console.log(employee);

// ? variable access by the use of []

var hobby = 'Hobby';
console.log(employee[hobby]);
employee['status'] = null ;

employee.details();

// ? For In Loop Example

for( prop in employee){
    console.log(prop + ' : ' + employee[prop]);
}

// todo Understanding Object 2 

console.log(" Understanding Objects Part  2 ")
console.log("HasOwnProperty Method : ");
function ownprop(obj){
    console.log(obj.hasOwnProperty('Name'));
    console.log(obj.hasOwnProperty('Hobby'));
    console.log(obj.hasOwnProperty('Tostring'));

};

ownprop(employee);

// ? Object Restriction of Properties

Object.defineProperty(employee,'Name',{
    configurable: true,
    writable : false,
    enumerable: false
});

employee.Name = " Srikanth";
console.log(employee.Name);

// ? Getter And Setter function

Object.defineProperty(employee,'Age2',{
    get :  function(){
        return this.status;
    },
    set : function(age){
        if(age >= 30){
             this.status = "Married";
        }
        else{
            this.status = 'Unmarried';
        }
    }

});

employee.Age2 = 60;
//  ? after the updation 
employee.details();

// todo Object constructor Function Example : 

function Social_media(name,type,popularity){
   this.Name = name;
   this.Type = type ;
   this.Popularity = popularity;
//    todo constructor inside function
   this.Details = function(){
    return console.log(
        'Name : ' + this.Name,
        'Type : ' + this.Type ,
        'Popularity: ' + this.Popularity
    )
   }
   
}

var media1 = new Social_media('Youtube','Video Hosting','High');
//  ? inside function call 
media1.Details();
var media2  = new Social_media('Facebook','Social Friends','Medium');
var media3 =  new Social_media('Threads','Sharing Opinion','High')



