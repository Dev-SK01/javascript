                              /* Value and Variables in JAVASCRIPT
                                 Identifiers and Keywords
                                 Syntax For Javascript
                                 this is case sensitive  
                                 All statemants ende with ";" 
                                 This is like c programming

                                */
    var message;
    message='hello Dev';
    console.log(message);
    console.log("sucess!!!")

            /* <-------------------- Javascripot variables   ----------------------->
                                            number-0,1,2.....
                                            boolean true or false
                                            string "".''
                                            null 0
                                            undefined 0
                                                            */
  var num1=230;
  var num2=34.3840840;
  var octnum=0255;
  var hexnum=0XFF;
  console.log(num1,num2,octnum,hexnum);
  console.log('sucess numbers');
//   <-------------------type of keyword is used to find the what data type is ------------------>
                                     /*Arthimetic Operaters
                                    
                                     Addition
                                     Subraction
                                     Multiplication
                                     Division
                                     Modulus %
                                     ++ increamnt 
                                     -- decrement */
  var a=10;
  var b=90;
  console.log(a+b);
  console.log(a+b);
  console.log(a+b);
  console.log(a+b);
  console.log(typeof message);
                      
                            /* Relational Opearater on Logical Operaters
                            &&-and        >,<,>=,<=,==,!=,===,!==
                            || -Or
                            !-Not
                            */
  console.log("true=",!true);
  console.log("hi || 0","hi"|| 0); // if the first value is true it return the first value 
  console.log(undefined || false); //if the two values or false it return the last checked value in  ||  operater
  console.log(25 && 56); //its checks the value and the two values are true returns the true
  console.log(undefined && true);//its checks the value and return the false value as output

                                  /* Conditional operater in javascript
                                    syntax:
                                      var name=boolean experssion?truevalu:falsevalue;                             
                                  */
      var cond1=a<b?"true":"false";
      console.log(cond1);
                                     
    /*<-------------------        If and IF-Else Statemant  ------------------>
                               
                               SYANTAX:

                                IF(condition){
                                  block of statements;
                                }
                                else
                                  statements;
                               */
    var p1=89;
    var p2=90;
    if(p1>p2)
    {
      console.log("person one is OLder!!");
    }
    else{
      console.log("person two is older!!");
    }
                            /* <------------  ALERT PROMPT COIFIRM  ---------------> */
              //alert("Web page loaded"); // press ok then the page will be loaded
              //prompt("Web Page Loaded");// prompt the message get the value from the user
              //Confirm("Are you Learning the  Javascript");

                            /* <------------- LOOPING STATEMENTS IN JAVASCRIPT ---------> 

                                FOR -PRE DEFINED TIMES
                                WHILE-WHILE THE CONDITON COMES FALSE
                                DO-WHILE-DO THE PROCESS AND THE CONDIDITIN WILL BE EXCUTED
                 */
                  /* <----------------- BREAK AND CONTINUE STATEMENTS ------------>                            
                             BREAK-IT BREAKS THE LOOP
                            CONTINUE- IT TAKE TO START OF PROGRAM NOT EXCUTING THE STATEMENTS
                */
               
var d=1;
for(d=1;d<=7;d++)
{
  console.log("Days:",d);
}

                                  /*var month=prompt("enter a monthe between ",6);
                                  for(var days=1;days<=31;days++)
                                  {
                                    if((month==4 || month==6 || month==9 || month==11)&&days==31)
                                    continue;
                                    console.log("days",days)
                                    if(month==2 && days==28)
                                    break;
                                    
                                  }
                                  */

//         <------------   SWITCH STATEMENT INN JAVASCRIPT     --------------->

                     
      numOfdays=5;
    switch(numOfdays)
      {
          case 1:
          console.log("this is moday");break;
          case 2:
            console.log("this is tuesday"); break;
          case 3:
              console.log("this is wednesday"); break;
          case 4:
                console.log("this is thursday");break;
          case 5:
                  console.log("this is friday"); break;
          case 6:
                    console.log("this is Saturday"); break;
          case 7:
            console.log("this is sunday"); break;
          default:
            console.log("oops!!!!");
      }

       




    /*<------------------              FUNTIONS IN JAVASCRIPT          ------------------>    
                           
                           SYNYTAX: 

                             function functuion_name(parm2,parm2)
                             {
                              // block of statemets
                             }
                            functionname();   ---> for function call

                            functionparms     ---> its means function definiton (parm1,parm2)

                            fuction arguments ---> its means parameter value .

                            We Can declare more than one function in function name tha last
                            Function will be excuted
                          */
var get_Name="sri";

function welcome(){
console.log(get_Name);

}
welcome();

 function msg()
 {
  return  console.log(nme+mseg);
 }
 var nme="srikanthn ";
var mseg="dude";
msg();

                            /* 
 <-------------------------   REFERANCE TYPE DATA TYPE IN JS    ------------------->                        
                           
                              THIS IS A OBJECT DATA TYPE

                              SYNTAX:
                              VAR OBJ NAME=NEW OBJECT() ---> CONSTRUCTER FOR OBJECT
                               "." ----> IS AN ACCESS THE VALUE

                               NAME ---->IS THE PROPERTY OF OBJECT

                               IN OBJECT WE CALL FUNCTION AS METHOD

                               IN PRIMITIVE THE DEFINED MEMEORY  IS ENOUGH

                               IN OBJECT VALUE THE VALUE IS NOT DEFINED INJS 

                               IN JS THE PRTIMITIVE VALUES STORES IN MEMORY STACK
                               
                               OBJECT VALUES STORES IN MEMORY HEAP

                               YTHIS IS LIKE C POINTERS

                               ONJECT VALUE IS ACCESED BY THE REFERANCE

                               CLASS IS COLLOCTION OF OBJECT  IN JS THERE IS NO CLASS ITS OBJECT DEFINITION

                               THERES IS ANOTHER METHOD IN CREATING A OBJECT

                               VAR OBJNAME={

                                PROPERTIES:"VALUE", seperate the properities
                               }
                               
                               THIS --> IS USED TO CALL THE OBJECT IN JS
                               WE CAN USE [] -->AS ADD NEW PROPERTY VARIABLE AND VALUE FOR OBJECT

                               WE CAN USE OBJECT PROPERTY AS VARIABLE VALUE IN JS

                            */
var hlo=new Object();
console.log(hlo instanceof Object);
hlo.name="srikanth";
hlo.detail="developer";
console.log(hlo.name+hlo.detail);
var person={
  name:"devsk",
  sayhi:function(){
    console.log(this.name);
  }
}
person["detail"]="developer"; // creating new property and value

person['D O B']='02-02-2004'; 

var new1='D O B '; // setting property as a variable value  
console.log(new1);

console.log(person);
console.log(person[new1]);
person.sayhi();

for(prop in person){ // accesing the prop values using for in loop
  console.log(person[prop]);
}