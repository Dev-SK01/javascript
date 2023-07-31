const mainDiv = document.querySelector('.main');


const btn = document.querySelector('.btn');
console.log(btn)

const red = document.getElementById('red')

const green= document.getElementById('green');

const blue = document.getElementById('blue');


function generateColor(){
    let GenRed = Math.floor(Math.random() * 255 +1);
 

   let GenGreen = Math.floor(Math.random() * 255 + 1);
   

   let GenBlue  = Math.floor(Math.random() * 255 + 1) ;
  

//    adding the random genereted number to HTML DOM

   red.innerText = `( ${GenRed} ,`;
   green.innerText = `${GenGreen} ,`;
   blue.innerText = `${GenBlue} )`;

   red.style.color ='red';
   green.style.color ='green';
   blue.style.color ='blue';
   
   mainDiv.style.backgroundColor = `rgb(${GenRed},${GenGreen},${GenBlue})`;
   
};

btn.addEventListener('click',generateColor);

