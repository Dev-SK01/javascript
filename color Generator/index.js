const mainDiv = document.querySelector('.main');


const btn = document.querySelector('.btn');
console.log(btn)

const red = document.getElementById('red')

const green= document.getElementById('green');

const blue = document.getElementById('blue');

const copy = document.querySelector('#copy');
console.log(copy);

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

   return `rgb(${GenRed},${GenGreen},${GenBlue})`
   
};

btn.addEventListener('click',generateColor);

copy.addEventListener('click' , () =>{

  let copyText = generateColor();

    navigator.clipboard.writeText(copyText);

    // Alert the copied text
    alert("Color Copied ): " + copyText);
});
    
