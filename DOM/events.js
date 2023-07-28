
const view1 = document.querySelector('.blue');
console.log(view1);
view1.style.width = '200px';
const h2 = view1.querySelector('h2');
console.log(h2);

function h2anim(event){
    const viewWidth = view1.style.width;
    viewWidth === '200px' ? view1.style.width = '300px' : view1.style.width ='200px'; //add the toggle function
}

h2.addEventListener('click',h2anim);

view1.addEventListener('mouseover',()=>{
    view1.style.backgroundColor = 'orange';
})

view1.addEventListener('mouseout',()=>{
    view1.style.backgroundColor = 'black';
})
// todo Ready State Change

document.addEventListener('readystatechange',(event) =>{
    console.log('Ready State Change Event Excuted! | Document Ready');
})


// todo    submit Event

const submit = document.querySelector('#form');
console.log(submit);

const input = document.querySelector('#input');
console.log(input);
console.log(input.value)
submit.addEventListener('submit',(event) =>{
    event.preventDefault();
    let value = input.value;
    console.log(value);
})