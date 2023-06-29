 /*
              ARRAY IN JAVASCRIPT
              CONSTRUCTER SYNTAX AND LITERAL SYNTAX

 */
 
              let department=new Array("cse","ece","civil","mech","eee");
              console.log(department);
        
              let literalarray=["cse","civil","mech","eee","ece"];
              console.log("literal syntax");
              console.log(literalarray);
               console.log("length="+literalarray.length);
        
        /*
                    ARRAY METHODS IN JAVASCRIPT
                    TO STRING METHOD
                    VALUEOF METHOD
        */
        var fruit=['apple','orange','mango'];
        console.log(fruit.toString()+ " Lenght " + fruit.length);
        //alert(fruit.valueOf());
        console.log(fruit.join(' - '));
        
        
        
        /*
                                STACK IN JAVASCRIPT
                                PUSH AND POP TWO FUNCTIONS
        
        
        */
        console.log("************************STACK IN JAVASCRIPT**************");
        var book=["book1","book2","book3"];
        var count=book.push("book4");
        console.log("Array size:"+count);
        var del=book.pop();
        console.log(book);
        
        
        /*
                                 QUE IN JAVASCRIPT
        
                                 EN-QUE IS PUSH
        
                                 DE-QUE IS SHIFT
                                 UNSHIFT IS USED TO ADD ELEMENT IN FIRST 
        
        */
        console.log("************************ QUE IN JAVASCRIPT **************");
        var ticketbook=[0,1,2];
        var insert=ticketbook.push(3);
        console.log("after pushing the elements")
        console.log(ticketbook)
        // push retuts the index of the array
        console.log("Length"+insert);
        var del=ticketbook.shift();
        console.log(ticketbook);
        for(i=0;i<ticketbook.length;i++)
        {
          console.log("element:",ticketbook[i]);
        }
        
        /* 
                              ARRAY reordering METHODS
                              REVERSE TO REVERSE THE ARRAY
                              SORT() --> SORT THE ARRAY --> IT CONVERTS ARR AS STRING 
                              FUNCTION IS DATA TYPE
        
        */
        console.log("************************ ARRAY REORDERING  METHODS**************");
        
        var meals=["dinner","lunch","breakfast"];
        console.log(meals);
        console.log("reversed array:"+meals.reverse());
        
        var marklist=[10,40,20,90,60];
        console.log(marklist.sort());
        
        function asending(value1,value2)
        {
          return value1-value2;
        }
        function desending(value1,value2)
        {
          return value2-value1;
        }
        
        console.log("Asending"+marklist.sort(asending));
        console.log("Desenging"+marklist.sort(desending));
        
        /*
                           ARRAY MANIPULATION IN JAVASCRIPT
                           CONCAT --> USED TO CLONE THE ARRAY
                           CONCAT TAKE ARRAY AS ARGUMENT TO CONCAT
        */
        
        var newmark=marklist.concat(100,200);
        console.log("concated"+newmark);
        console.log("concated"+newmark.sort(asending));
        
        /*
                          ARRAY MANIPULATION METHODS IN JS
                          
                          Array Copy --> concat() --> its get array as argumentS
        */
       var arr1=["apple","mango","orange","Mangoes"];
       var arr2=arr1.concat();
       var arr3=arr1.concat("Mango","Grapes");
       arr2.push("banana")
       console.log(arr2)
      /*
                       SLICE IN ARRAY 
                       Its Works Like seperate
                       slice(start,end)

                       SPLICE METHOS 
                       Deletes the array elements we can use replace and insert this method
                       splice(start,remove element index ," replace element")

      */
     var Slice=arr1.slice(0,2);
     console.log("Slice :"+Slice);
     var Splice=arr2.splice(0,1);
     console.log("Splice :"+Splice);
     var Spliceinsert=arr3.splice(1,3,"Banana-1")
     console.log("Spliceinsert :"+Spliceinsert);
     
    /* 
     Array Iterative Method In Javascript
     Foreach() -->  this is used to iterate the array item it has 3 arguments index item value;

    */
   console.log("For each Method");
   arr1.forEach(function(item,index,array){
       console.log("Array" +array);
       console.log("THE" +item+ "is At Index " + index);
       var arreach=document.querySelector(".foreach");
   arreach.innerHTML="<h1>For Each Array Iteration</h1><hr> ";

   })
   /*
        Array map Method 
        this method perform some operation in the given array and generates new array 
        arrayname.map(param)

        map(function (param)){
             creates a new mapped array
        }

        filter(function(param)){
             
           this filter the object data and variables in sorted array format
        }
      
        every(function(param){
          this checks the all the given array element rerurn true based on the condition 
        })
        
        sum(function(param){
          this checks the all the array element and the based on the element is there in  not array
          it returns false otherwise return true
        })
   */
  var map=document.querySelector(".map");
  map.innerHTML="<h1>Array Map Method </h1>";
  var element1=document.querySelector(".element")
 var pricelist=[100,200,300,400,500];
 var discount=8.5;
 var dislist=pricelist.map(function(price){
    var price= price-(price*discount/100);
    return price;   //var element1=document.querySelector("element")
   //element1.innerHTML="The New Mapped List " +dislist;
    
 })
 console.log("the new mapped array is : "  +dislist);

 console.log("Filter Function With Object");

 var employees=[
  {
    role:"developer-1",
    salary:20000
  },
  {
    role:"develeoper-2",
    salary:40000
    
  },
  {
    role:"developer-3",
    salary:50000
  }
 ];

 var sortedemp=employees.map(function(employee){
     if(employee.salary>20000)
     {
      return employee.role;
     }
     else{
      console.log("No Employee Found");
     }
     
 })
 console.log("filter Function")
 var sortedemp1=employees.filter(function(employee){

   return employee.salary>20000;
 })
 console.log(sortedemp1);
console.log(sortedemp);

console.log("Array SUM AND EVERY METHOD");

function getresult(mrklist){
    var result=mrklist.every(function(mark){
      return mark>45;
    });
    if(result){
      console.log("passed....");
    }
    else
    {
      console.log("some failed.....:)");
    }
};
console.log("SUM FUNCTION");
// creating a function as object
function funobj(name,yoj,salary){
  this.name=name;
  this.yoj=yoj;
  this.salary=salary;
}
var newobj=new funobj("devsk",2023,10000);
console.log(newobj.name);