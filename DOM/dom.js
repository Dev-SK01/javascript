const section_01 = document.querySelector('.section-01')
console.log(section_01);
const section_02 = document.querySelector('.section-02');
console.log(section_02);

const evenDivs = section_01.querySelectorAll('div:nth-of-type(2n)');
console.log(evenDivs);
let outerText01  = [section_01.outerText];

// adding 0 to the text content section01
const section_01_children =section_01.children;
for(let i = 0 ;i < section_01_children.length ; i++){
    section_01_children[i].draggable = true;
    section_01_children[i].style.border= '2px yellow solid';
    section_01_children[i].className ='animation';
    if(i >= 9){
        section_01_children[i] = i;
    }
    else{
        section_01_children[i].textContent = `0${i+1}`;
    }

}
section_01_children[5].remove();

const removedChildren_5 = document.createElement('div');
removedChildren_5.textContent = '06';
removedChildren_5.className = 'animation';
section_01.append(removedChildren_5);

const test = document.querySelector('.test p');
console.log(test);
test.innerHTML = `<h1> ${outerText01} </h1>`

const creatediv = (parent,divcount) =>{
    const newdiv = document.createElement('div');
    newdiv.textContent = divcount ;
    newdiv.className = 'animation';
    parent.append(newdiv);
}

function callCreateDiv(count){
    for(let i= 1 ; i < count ; i++){
        creatediv(section_02,i);
    }
}

callCreateDiv(12);